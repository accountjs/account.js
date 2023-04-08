import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import circomlibjs from 'circomlibjs'
import { PrivateRecoveryAccountFactory__factory } from '../contracts'
import { EntryPoint__factory, FixedPaymaster__factory, GaslessPaymaster__factory, SocialRecoveryVerifier__factory, Token__factory, USDPaymaster__factory, USDToken__factory, UpdateGuardianVerifier__factory, VerifyingPaymaster__factory, WETHPaymaster__factory, WETH__factory } from '../typechain'
import { parseEther, parseUnits } from 'ethers/lib/utils'

// deploy entrypoint - but only on debug network..
const deployEP: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // deploy entrypoints
  const entryPoint = await new EntryPoint__factory(ethers.provider.getSigner()).deploy()
  console.log('Deployed EntryPoint at', entryPoint.address)

  const updateGuardianVerifier = await new UpdateGuardianVerifier__factory(ethers.provider.getSigner()).deploy()
  console.log('deploy update guardian verifier in', updateGuardianVerifier.address)

  const socialRecoveryVerifier = await new SocialRecoveryVerifier__factory(ethers.provider.getSigner()).deploy()
  console.log('deploy social recovery verifier in', socialRecoveryVerifier.address)

  const guardianStorageFactory = await ethers.getContractFactory(
    'GuardianStorage'
  )
  const guardianStorageLib = await guardianStorageFactory.deploy()
  await guardianStorageLib.deployed()

  const privateRecoveryAccountFactory = await new PrivateRecoveryAccountFactory__factory({
    'contracts/samples/GuardianStorage.sol:GuardianStorage': guardianStorageLib.address
  }, ethers.provider.getSigner()).deploy(entryPoint.address)

  console.log('deploy private recovery account factory in', privateRecoveryAccountFactory.address)

  const poseidonT3ABI = circomlibjs.poseidon_gencontract.generateABI(1)
  const poseidonT3Bytecode = circomlibjs.poseidon_gencontract.createCode(1)
  const PoseidonLibT3Factory = new ethers.ContractFactory(
    poseidonT3ABI,
    poseidonT3Bytecode,
    ethers.provider.getSigner()
  )
  const poseidonT3Lib = await PoseidonLibT3Factory.deploy()
  await poseidonT3Lib.deployed()
  console.log(
    `PoseidonT3 library has been deployed to: ${poseidonT3Lib.address}`
  )

  // deploy weth
  const weth = await new WETH__factory(ethers.provider.getSigner()).deploy()
  console.log('Deployed WETH at', weth.address)

  // 1. deploy weth paymaster
  const wethPaymaster = await new WETHPaymaster__factory(ethers.provider.getSigner()).deploy(privateRecoveryAccountFactory.address, entryPoint.address, weth.address)
  console.log('Deployed WETHPaymaster at', wethPaymaster.address)

  // deploy usd and oracle
  const usd = await new USDToken__factory(ethers.provider.getSigner()).deploy(parseUnits('1000000000', 8))
  console.log('Deployed USDT at', usd.address)

  // 2. deploy usd paymaster
  const usdPaymaster = await new USDPaymaster__factory(ethers.provider.getSigner()).deploy(privateRecoveryAccountFactory.address, entryPoint.address, usd.address, usd.address)
  console.log('Deployed USDPaymaster at', usdPaymaster.address)

  const token = await new Token__factory(ethers.provider.getSigner()).deploy('TestToken', 'TT')
  console.log('Deployed Token at', token.address)

  // 4. fixed create and tx fee paymaster
  const fixedPaymaster = await new FixedPaymaster__factory(ethers.provider.getSigner()).deploy(privateRecoveryAccountFactory.address, entryPoint.address, token.address, parseEther('1'), parseEther('10'))
  console.log('Deployed FixedPaymaster at', fixedPaymaster.address)

  // 3. gasless paymaster
  const gaslessPaymaster = await new GaslessPaymaster__factory(ethers.provider.getSigner()).deploy(entryPoint.address, ethers.provider.getSigner().getAddress())
  console.log('Deployed GaslessPaymaster at', gaslessPaymaster.address)

  // 3. verified paymaster
  const verifiedPaymaster = await new VerifyingPaymaster__factory(ethers.provider.getSigner()).deploy(entryPoint.address, ethers.provider.getSigner().getAddress())
  console.log('Deployed VerifiedPaymaster at', verifiedPaymaster.address)
}

export default deployEP
