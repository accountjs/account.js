import { JsonRpcProvider } from '@ethersproject/providers'

import { EntryPoint__factory, SimpleAccountFactory__factory } from '@account-abstraction/contracts'

import { ClientConfig } from './ClientConfig'
import { SimpleAccountAPI } from './SimpleAccountAPI'
import { SimpleAccountForTokensAPI } from './SimpleAccountForTokensAPI'
import { ERC4337EthersProvider } from './ERC4337EthersProvider'
import { HttpRpcClient } from './HttpRpcClient'
import { DeterministicDeployer } from './DeterministicDeployer'
import { Signer } from '@ethersproject/abstract-signer'
import Debug from 'debug'
import { PrivateRecoveryAccountAPI } from './PrivateRecoveryAccountAPI'

const debug = Debug('aa.wrapProvider')

/**
 * wrap an existing provider to tunnel requests through Account Abstraction.
 * @param originalProvider the normal provider
 * @param config see ClientConfig for more info
 * @param originalSigner use this signer as the owner. of this wallet. By default, use the provider's signer
 */
export async function wrapProvider (
  originalProvider: JsonRpcProvider,
  config: ClientConfig,
  originalSigner: Signer = originalProvider.getSigner()
): Promise<ERC4337EthersProvider> {
  const entryPoint = EntryPoint__factory.connect(config.entryPointAddress, originalProvider)
  // Initial SimpleAccount instance is not deployed and exists just for the interface
  const detDeployer = new DeterministicDeployer(originalProvider)
  const SimpleAccountFactory = await detDeployer.deterministicDeploy(new SimpleAccountFactory__factory(), 0, [entryPoint.address])
  const smartAccountAPI = new SimpleAccountAPI({
    provider: originalProvider,
    entryPointAddress: entryPoint.address,
    owner: originalSigner,
    factoryAddress: SimpleAccountFactory,
    paymasterAPI: config.paymasterAPI
  })
  debug('config=', config)
  const chainId = await originalProvider.getNetwork().then(net => net.chainId)
  const httpRpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPointAddress, chainId)
  return await new ERC4337EthersProvider(
    chainId,
    config,
    originalSigner,
    originalProvider,
    httpRpcClient,
    entryPoint,
    smartAccountAPI
  ).init()
}

export async function wrapSimpleProvider (
  originalProvider: JsonRpcProvider,
  config: ClientConfig,
  originalSigner: Signer = originalProvider.getSigner()
): Promise<ERC4337EthersProvider> {
  const entryPoint = EntryPoint__factory.connect(config.entryPointAddress, originalProvider)
  const smartAccountAPI = new SimpleAccountAPI({
    provider: originalProvider,
    entryPointAddress: entryPoint.address,
    owner: originalSigner,
    factoryAddress: config.accountFactory,
    paymasterAPI: config.paymasterAPI
  })
  debug('config=', config)
  const chainId = await originalProvider.getNetwork().then(net => net.chainId)
  const httpRpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPointAddress, chainId)
  return await new ERC4337EthersProvider(
    chainId,
    config,
    originalSigner,
    originalProvider,
    httpRpcClient,
    entryPoint,
    smartAccountAPI
  ).init()
}

export async function wrapPaymasterProvider (
  originalProvider: JsonRpcProvider,
  config: ClientConfig,
  originalSigner: Signer,
  token: string, paymaster: string
): Promise<ERC4337EthersProvider> {
  const entryPoint = EntryPoint__factory.connect(config.entryPointAddress, originalProvider)
  const smartAccountAPI = new SimpleAccountForTokensAPI({
    provider: originalProvider,
    entryPointAddress: entryPoint.address,
    owner: originalSigner,
    token,
    paymaster,
    factoryAddress: config.accountFactory,
    paymasterAPI: config.paymasterAPI
  })
  debug('config=', config)
  const chainId = await originalProvider.getNetwork().then(net => net.chainId)
  const httpRpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPointAddress, chainId)
  return await new ERC4337EthersProvider(
    chainId,
    config,
    originalSigner,
    originalProvider,
    httpRpcClient,
    entryPoint,
    smartAccountAPI
  ).init()
}

export async function wrapPrivateGuardianProvider (
  originalProvider: JsonRpcProvider,
  config: ClientConfig,
  originalSigner: Signer,
  token: string,
  paymaster: string
): Promise<ERC4337EthersProvider> {
  const entryPoint = EntryPoint__factory.connect(config.entryPointAddress, originalProvider)
  const smartAccountAPI = new PrivateRecoveryAccountAPI({
    provider: originalProvider,
    entryPointAddress: entryPoint.address,
    owner: originalSigner,
    token,
    paymaster,
    accountAddress: config.walletAddress, //
    factoryAddress: config.accountFactory, //
    paymasterAPI: config.paymasterAPI //
  })
  debug('config=', config)
  const chainId = await originalProvider.getNetwork().then(net => net.chainId)
  const httpRpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPointAddress, chainId)
  return await new ERC4337EthersProvider(
    chainId,
    config,
    originalSigner,
    originalProvider,
    httpRpcClient,
    entryPoint,
    smartAccountAPI
  ).init()
}
