// runner script, to create

/**
 * a simple script runner, to test the bundler and API.
 * for a simple target method, we just call the "nonce" method of the account itself.
 */

import { BigNumber, getDefaultProvider, Signer, Wallet } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { formatEther, keccak256, parseEther } from 'ethers/lib/utils'
import { Command } from 'commander'
import { erc4337RuntimeVersion } from '@accountjs/utils'
import { WETH__factory, WETHPaymaster__factory } from '@accountjs/contracts'
import { ERC4337EthersProvider, TokenPaymasterAPI, ClientConfig, wrapPaymasterProvider } from '@accountjs/sdk'
import { runBundler } from '../runBundler'
import { BundlerServer } from '../BundlerServer'
import { Sleep } from './utils'
import { ENTRY_POINT, WETH, ACCTOK_FACTORY, WETH_PAYMASTER } from './constants'
class Runner {
  aaProvider!: ERC4337EthersProvider

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
    return await this.aaProvider.getSenderAccountAddress()
  }

  async init (deploymentSigner?: Signer): Promise<this> {
    // const net = await this.provider.getNetwork()
    // const chainId = net.chainId

    const paymasterAPI = new TokenPaymasterAPI(WETH_PAYMASTER)
    console.log('paymasterAPI', await paymasterAPI.getPaymasterAndData({}))

    // this.bundlerProvider = new HttpRpcClient(this.bundlerUrl, this.entryPointAddress, chainId)
    // this.accountApi = new SimpleAccountForTokensAPI({
    //   provider: this.provider,
    //   entryPointAddress: this.entryPointAddress,
    //   factoryAddress: ACCTOK_FACTORY,
    //   paymasterAPI,
    //   owner: this.accountOwner,
    //   token: WETH,
    //   paymaster: WETH_PAYMASTER,
    //   index: this.index,
    //   overheads: {
    //     // perUserOp: 100000
    //   }
    // })

    const config: ClientConfig = {
      entryPointAddress: this.entryPointAddress,
      bundlerUrl: this.bundlerUrl,
      accountFactory: ACCTOK_FACTORY,
      paymasterAPI
    }
    this.aaProvider = await wrapPaymasterProvider(this.provider, config, this.accountOwner, WETH, WETH_PAYMASTER)
    return this
  }

  async transferETH (target: string, ether: string): Promise<void> {
    await this.aaProvider.getSigner().sendTransaction({
      to: target,
      data: '0x',
      value: parseEther(ether),
      gasLimit: 100000
    })
  }

  async transferWeth (target: string, ether: string): Promise<void> {
    const wethAA = WETH__factory.connect(WETH, this.aaProvider.getSigner())
    await wethAA.transfer(target, parseEther(ether))
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

  // signer transfer 10 eth to WETH
  const eth0 = await signer.getBalance()
  console.log('eth0=', formatEther(eth0))

  await signer.sendTransaction({
    to: WETH,
    value: parseEther('10')
  })

  const eth1 = await signer.getBalance()
  console.log('eth1=', formatEther(eth1))

  // check WETH balance
  const weth = WETH__factory.connect(WETH, signer)
  const wethBal = await weth.balanceOf(signer.getAddress())
  console.log('weth bal=', formatEther(wethBal))

  const paymaster = WETHPaymaster__factory.connect(WETH_PAYMASTER, signer)
  // paymaster deposit 1 eth
  console.log('paymaster owner:', await paymaster.owner())

  await paymaster.deposit({ value: parseEther('1') })
  // await paymaster.addStake(1000, { value: parseEther('1') })
  const deposit = await paymaster.getDeposit()
  console.log('paymaster deposit=', formatEther(deposit))

  const accountOwner = new Wallet('0x'.padEnd(66, '7'))

  const index = Date.now()
  const client = await new Runner(provider, opts.bundlerUrl, accountOwner, opts.entryPoint, index).init(deployFactory ? signer : undefined)
  const addr = await client.getAddress()

  // 转入 1 WETH
  await weth.transfer(addr, parseEther('1'))

  async function isDeployed (addr: string): Promise<boolean> {
    return await provider.getCode(addr).then(code => code !== '0x')
  }

  async function getBalance (addr: string): Promise<BigNumber> {
    return await provider.getBalance(addr)
    // return await weth.balanceOf(addr)
  }
  async function getWethBalance (addr: string): Promise<BigNumber> {
    return await weth.balanceOf(addr)
  }

  // 存够 0.5
  const bal = await getBalance(addr)
  const requiredBalance = parseEther('0.5')
  console.log('funding account to', requiredBalance)
  // 发送转成WETH
  await signer.sendTransaction({
    to: addr,
    value: requiredBalance.sub(bal)
  })

  const bal0 = await getBalance(addr)
  const wbal = await getWethBalance(addr)
  // 0.5 ETH 1 weth
  console.log('account address', addr, 'deployed=', await isDeployed(addr), 'bal=', formatEther(bal0), 'weth=', formatEther(wbal))
  const ownerAddr = await accountOwner.getAddress()
  const ownerBal = await weth.balanceOf(ownerAddr)
  console.log('owner', ownerAddr, 'WETH bal=', formatEther(ownerBal))

  // 转账 0.1 ETH
  const dest = addr
  await client.transferETH(ownerAddr, '0.1')
  console.log('after run1')

  await Sleep(5000)

  const bal1 = await getBalance(dest)
  const wbal1 = await getWethBalance(addr)
  console.log('account address', addr, 'deployed=', await isDeployed(addr), 'bal=', formatEther(bal1), 'weth=', formatEther(wbal1))
  // ownerBal = await weth.balanceOf(ownerAddr)
  // console.log('owner', ownerAddr, 'WETH bal=', formatEther(ownerBal))

  // 转账 0.2 ETH
  await client.transferETH(ownerAddr, '0.2')
  console.log('after run2')
  await Sleep(5000)

  const bal2 = await getBalance(dest)
  const wbal2 = await getWethBalance(addr)
  console.log('account address', addr, 'deployed=', await isDeployed(addr), 'bal=', formatEther(bal2), 'weth=', formatEther(wbal2))
  // ownerBal = await weth.balanceOf(ownerAddr)
  // console.log('owner', ownerAddr, 'WETH bal=', formatEther(ownerBal))
  await bundler?.stop()
}

void main()
