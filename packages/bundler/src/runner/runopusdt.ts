// runner script, to create

/**
 * a simple script runner, to test the bundler and API.
 * for a simple target method, we just call the "nonce" method of the account itself.
 */

import { BigNumber, getDefaultProvider, Signer, Wallet } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { formatEther, formatUnits, keccak256, parseEther, parseUnits } from 'ethers/lib/utils'
import { Command } from 'commander'
import { erc4337RuntimeVersion } from '@accountjs/utils'
import { EntryPoint__factory } from '@account-abstraction/contracts'
import { USDToken__factory, USDPaymaster__factory } from '@accountjs/contracts'
import { HttpRpcClient, SimpleAccountForTokensAPI, TokenPaymasterAPI } from '@accountjs/sdk'
import { runBundler } from '../runBundler'
import { BundlerServer } from '../BundlerServer'
import { parseExpectedGas, Sleep } from './utils'
import { ENTRY_POINT, ACCTOK_FACTORY, USDT, USD_PAYMASTER, beneficiary } from './constants'

class Runner {
  bundlerProvider!: HttpRpcClient
  accountApi!: SimpleAccountForTokensAPI

  /**
   *
   * @param provider - a provider for initialization. This account is used to fund the created account contract, but it is not the account or its owner.
   * @param bundlerUrl - a URL to a running bundler. must point to the same network the provider is.
   * @param accountOwner - the wallet signer account. used only as signer (not as transaction sender)
   * @param entryPointAddress - the entrypoint address to use.
   * @param index - unique salt, to allow multiple accounts with the same owner
   */
  constructor (
    readonly provider: JsonRpcProvider,
    readonly bundlerUrl: string,
    readonly accountOwner: Signer,
    readonly entryPointAddress = ENTRY_POINT,
    readonly index = 0
  ) {
  }

  async getAddress (): Promise<string> {
    return await this.accountApi.getCounterFactualAddress()
  }

  async init (deploymentSigner?: Signer): Promise<this> {
    const net = await this.provider.getNetwork()
    const chainId = net.chainId

    const paymasterAPI = new TokenPaymasterAPI(USD_PAYMASTER)
    console.log('paymasterAPI', await paymasterAPI.getPaymasterAndData({}))

    this.bundlerProvider = new HttpRpcClient(this.bundlerUrl, this.entryPointAddress, chainId)
    this.accountApi = new SimpleAccountForTokensAPI({
      provider: this.provider,
      entryPointAddress: this.entryPointAddress,
      factoryAddress: ACCTOK_FACTORY,
      paymasterAPI,
      owner: this.accountOwner,
      token: USDT,
      paymaster: USD_PAYMASTER,
      index: this.index,
      overheads: {
        // perUserOp: 100000
      }
    })
    return this
  }

  async runUserOp (target: string, data: string): Promise<void> {
    const userOp = await this.accountApi.createSignedUserOp({
      target,
      data
    })
    console.log(userOp)

    try {
      const userOpHash = await this.bundlerProvider.sendUserOpToBundler(userOp)
      const txid = await this.accountApi.getUserOpReceipt(userOpHash)
      console.log('reqId', userOpHash, 'txid=', txid)
    } catch (e: any) {
      throw parseExpectedGas(e)
    }
  }

  async estUserOp (target: string, data: string): Promise<void> {
    const userOp = await this.accountApi.createSignedUserOp({
      target,
      data
    })
    console.log(userOp)
    try {
      const estimateUserOpGas = await this.bundlerProvider.estimateUserOpGas(userOp)
      console.log('estimateUserOpGas', estimateUserOpGas)
    } catch (e: any) {
      throw parseExpectedGas(e)
    }
  }

  async hdlUserOp (target: string, data: string, signer: Signer): Promise<void> {
    const userOp = await this.accountApi.createSignedUserOp({
      target,
      data
    })
    console.log(userOp)
    try {
      const entrypoint = new EntryPoint__factory(signer).attach(this.entryPointAddress)
      await entrypoint.handleOps([userOp], beneficiary, { gasLimit: 1e6 })
    } catch (e: any) {
      // failed to handleOp. use FailedOp to detect by
      if (e.errorName !== 'FailedOp') {
        console.warn('Failed handleOps, but non-FailedOp error', e)
        return
      }
      console.log(e)
    }
  }
}

async function main (): Promise<void> {
  const program = new Command()
    .version(erc4337RuntimeVersion)
    .option('--network <string>', 'network name or url', 'http://localhost:8545')
    .option('--mnemonic <file>', 'mnemonic/private-key file of signer account (to fund account)')
    .option('--bundlerUrl <url>', 'bundler URL', 'http://localhost:3000/rpc')
    .option('--entryPoint <string>', 'address of the supported EntryPoint contract', ENTRY_POINT)
    .option('--deployFactory', 'Deploy the "account deployer" on this network (default for testnet)')
    .option('--show-stack-traces', 'Show stack traces.')
    .option('--selfBundler', 'run bundler in-process (for debugging the bundler)')

  const opts = program.parse().opts()
  const provider = getDefaultProvider(opts.network) as JsonRpcProvider
  let signer: Signer
  const deployFactory: boolean = opts.deployFactory
  let bundler: BundlerServer | undefined
  // 如果是本地环境，需要启动bundler
  if (opts.selfBundler != null) {
    console.log('starting bundler in-process')

    // todo: if node is geth, we need to fund our bundler's account:
    const signer = provider.getSigner()

    const signerBalance = await provider.getBalance(signer.getAddress())
    const account = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
    const bal = await provider.getBalance(account)
    if (bal.lt(parseEther('1')) && signerBalance.gte(parseEther('10000'))) {
      console.log('funding hardhat account', account)
      await signer.sendTransaction({
        to: account,
        value: parseEther('1').sub(bal)
      })
    }

    const argv = ['node', 'exec', '--config', './localconfig/bundler.config.json', '--unsafe']
    if (opts.entryPoint != null) {
      argv.push('--entryPoint', opts.entryPoint)
    }
    bundler = await runBundler(argv)
    await bundler.asyncStart()
  }

  try {
    const accounts = await provider.listAccounts()
    if (accounts.length === 0) {
      console.log('fatal: no account. use --mnemonic (needed to fund account)')
      process.exit(1)
    }
    // for hardhat/node, use account[0]
    signer = provider.getSigner()
    // deployFactory = true
  } catch (e) {
    throw new Error('must specify --mnemonic')
  }

  // check USDT balance
  const usdt = USDToken__factory.connect(USDT, signer)
  const usdtBal = await usdt.balanceOf(signer.getAddress())
  console.log('usdt bal=', formatUnits(usdtBal, 8))

  const paymaster = USDPaymaster__factory.connect(USD_PAYMASTER, signer)
  console.log('paymaster owner:', await paymaster.owner())

  // Paymaster deposit 1 eth to pay for gas
  await paymaster.deposit({ value: parseEther('1') })
  const deposit = await paymaster.getDeposit()
  console.log('paymaster deposit=', formatEther(deposit))

  const accountOwner = new Wallet('0x'.padEnd(66, '7'))

  // 初始化账户
  const index = Date.now()
  const client = await new Runner(provider, opts.bundlerUrl, accountOwner, opts.entryPoint, index).init(deployFactory ? signer : undefined)
  const addr = await client.getAddress()
  // transfer 1 weth to addr
  await usdt.transfer(addr, parseUnits('10000', 8))

  async function isDeployed (addr: string): Promise<boolean> {
    return await provider.getCode(addr).then(code => code !== '0x')
  }

  async function getBalance (addr: string): Promise<BigNumber> {
    // return await provider.getBalance(addr)
    return await usdt.balanceOf(addr)
  }

  const bal = await getBalance(addr)
  console.log('account address', addr, 'deployed=', await isDeployed(addr), 'bal=', formatUnits(bal, 8))

  const dest = addr
  const data = keccak256(Buffer.from('nonce()')).slice(0, 10) // 发送个随机数据
  console.log('data=', data)
  // 发送到bundler
  await client.runUserOp(dest, data)
  console.log('after run1')
  await Sleep(5000)

  // 查看 usdt 余额
  const bal1 = await getBalance(dest)
  console.log('account address', addr, 'deployed=', await isDeployed(addr), 'bal=', formatUnits(bal1, 8))
  // client.accountApi.overheads!.perUserOp = 30000
  // await client.runUserOp(dest, data)
  // console.log('after run2')
  await bundler?.stop()
}

void main()
