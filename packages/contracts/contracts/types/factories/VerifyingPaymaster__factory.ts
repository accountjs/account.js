/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  VerifyingPaymaster,
  VerifyingPaymasterInterface,
} from "../VerifyingPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verifyingSigner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "requiredPreFund",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200141838038062001418833981016040819052620000349162000155565b8162000040336200005f565b6200004b81620000af565b506001600160a01b03166080525062000194565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000b9620000db565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146200013a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b03811681146200015257600080fd5b50565b600080604083850312156200016957600080fd5b825162000176816200013c565b602084015190925062000189816200013c565b809150509250929050565b608051611261620001b760003960008181610134015261098001526112616000f3fe6080604052600436106100e85760003560e01c8063b0d691fe1161008a578063c399ec8811610059578063c399ec8814610290578063d0e30db0146102a5578063f2fde38b146102ad578063f465c77e146102cd57600080fd5b8063b0d691fe14610200578063bb9fe6bf1461022d578063c23a5cea14610242578063c266f2921461026257600080fd5b8063584465f2116100c6578063584465f214610180578063715018a6146101a05780638da5cb5b146101b5578063a9a23409146101e057600080fd5b80630396cb60146100ed578063205c28781461010257806323d9ac9b14610122575b600080fd5b6101006100fb366004610ec0565b6102fb565b005b34801561010e57600080fd5b5061010061011d366004610f0f565b610391565b34801561012e57600080fd5b506101567f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018c57600080fd5b5061010061019b366004610f3b565b61040d565b3480156101ac57600080fd5b5061010061045c565b3480156101c157600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610156565b3480156101ec57600080fd5b506101006101fb366004610f58565b610470565b34801561020c57600080fd5b506001546101569073ffffffffffffffffffffffffffffffffffffffff1681565b34801561023957600080fd5b5061010061048a565b34801561024e57600080fd5b5061010061025d366004610f3b565b610510565b34801561026e57600080fd5b5061028261027d366004611000565b6105a0565b604051908152602001610177565b34801561029c57600080fd5b50610282610680565b610100610718565b3480156102b957600080fd5b506101006102c8366004610f3b565b610784565b3480156102d957600080fd5b506102ed6102e836600461103d565b610840565b60405161017792919061108b565b6103036109fe565b6001546040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff90911690630396cb609034906024016000604051808303818588803b15801561037557600080fd5b505af1158015610389573d6000803e3d6000fd5b505050505050565b6103996109fe565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b15801561037557600080fd5b6104156109fe565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6104646109fe565b61046e6000610a7f565b565b610478610af4565b61048484848484610b18565b50505050565b6104926109fe565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104fc57600080fd5b505af1158015610484573d6000803e3d6000fd5b6105186109fe565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b15801561058557600080fd5b505af1158015610599573d6000803e3d6000fd5b5050505050565b6000813560208301356105b66040850185611106565b6040516105c492919061116b565b6040519081900390206105da6060860186611106565b6040516105e892919061116b565b6040805191829003822073ffffffffffffffffffffffffffffffffffffffff909516602083015281019290925260608201526080808201929092529083013560a08083019190915283013560c08083019190915283013560e08083019190915283013561010080830191909152830135610120820152610140015b604051602081830303815290604052805190602001209050919050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610713919061117b565b905090565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b15801561058557600080fd5b61078c6109fe565b73ffffffffffffffffffffffffffffffffffffffff8116610834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61083d81610a7f565b50565b606060008061084e866105a0565b9050366000610861610120890189611106565b90925090506000610873601483611194565b905080604014806108845750806041145b61091257604080517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482015260248101919091527f566572696679696e675061796d61737465723a20696e76616c6964207369676e60448201527f6174757265206c656e67746820696e207061796d6173746572416e6444617461606482015260840161082b565b61096861092283601481876111d2565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506109629250889150610b7a9050565b90610bb5565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16146109da576001604051806020016040528060008152509095509550505050506109f6565b6000604051806020016040528060008152509095509550505050505b935093915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461046e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161082b565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461046e57600080fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6d757374206f7665727269646500000000000000000000000000000000000000604482015260640161082b565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01610663565b6000806000610bc48585610bd9565b91509150610bd181610c1e565b509392505050565b6000808251604103610c0f5760208301516040840151606085015160001a610c0387828585610dd1565b94509450505050610c17565b506000905060025b9250929050565b6000816004811115610c3257610c326111fc565b03610c3a5750565b6001816004811115610c4e57610c4e6111fc565b03610cb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161082b565b6002816004811115610cc957610cc96111fc565b03610d30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161082b565b6003816004811115610d4457610d446111fc565b0361083d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161082b565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610e085750600090506003610eb7565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610e5c573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116610eb057600060019250925050610eb7565b9150600090505b94509492505050565b600060208284031215610ed257600080fd5b813563ffffffff81168114610ee657600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461083d57600080fd5b60008060408385031215610f2257600080fd5b8235610f2d81610eed565b946020939093013593505050565b600060208284031215610f4d57600080fd5b8135610ee681610eed565b60008060008060608587031215610f6e57600080fd5b843560038110610f7d57600080fd5b9350602085013567ffffffffffffffff80821115610f9a57600080fd5b818701915087601f830112610fae57600080fd5b813581811115610fbd57600080fd5b886020828501011115610fcf57600080fd5b95986020929092019750949560400135945092505050565b60006101608284031215610ffa57600080fd5b50919050565b60006020828403121561101257600080fd5b813567ffffffffffffffff81111561102957600080fd5b61103584828501610fe7565b949350505050565b60008060006060848603121561105257600080fd5b833567ffffffffffffffff81111561106957600080fd5b61107586828701610fe7565b9660208601359650604090950135949350505050565b604081526000835180604084015260005b818110156110b9576020818701810151606086840101520161109c565b818111156110cb576000606083860101525b50602083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01601606001919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261113b57600080fd5b83018035915067ffffffffffffffff82111561115657600080fd5b602001915036819003821315610c1757600080fd5b8183823760009101908152919050565b60006020828403121561118d57600080fd5b5051919050565b6000828210156111cd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b600080858511156111e257600080fd5b838611156111ef57600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212206b82bb710482fc5ba41828bdf31170cafd409889c3b811274987908eaea9156464736f6c634300080f0033";

type VerifyingPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyingPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyingPaymaster__factory extends ContractFactory {
  constructor(...args: VerifyingPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VerifyingPaymaster> {
    return super.deploy(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<VerifyingPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  override attach(address: string): VerifyingPaymaster {
    return super.attach(address) as VerifyingPaymaster;
  }
  override connect(signer: Signer): VerifyingPaymaster__factory {
    return super.connect(signer) as VerifyingPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingPaymasterInterface {
    return new utils.Interface(_abi) as VerifyingPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyingPaymaster {
    return new Contract(address, _abi, signerOrProvider) as VerifyingPaymaster;
  }
}
