import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import circomlibjs from 'circomlibjs'
import { PrivateRecoveryAccountFactory__factory } from '../contracts'
import { SocialRecoveryVerifier__factory, UpdateGuardianVerifier__factory } from '../typechain'

// deploy entrypoint - but only on debug network..
const deployEP: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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
  }, ethers.provider.getSigner()).deploy('0x0576a174D229E3cFA37253523E645A78A0C91B57')

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
}

export default deployEP
