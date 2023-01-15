/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleAccount,
  SimpleAccountInterface,
} from "../../../contracts/samples/SimpleAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
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
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
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
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
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
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
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
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c0346100af57601f611e2a38819003918201601f19168301916001600160401b038311848410176100b4578084926020946040528339810103126100af57516001600160a01b03811681036100af573060805260a052604051611d5f90816100cb823960805181818161053c01528181610a2f0152610c0c015260a0518181816101c10152818161073b015281816107d001528181610dce01528181610ef10152818161186001526118bf0152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c80630825d1fc1461011f57806318dfb3c7146101165780633659cfe61461010d5780634a58db19146101045780634d44560d146100fb5780634f1ef286146100f257806352d1902d146100e95780638da5cb5b146100e0578063affed0e0146100d7578063b0d691fe146100ce578063b61d27f6146100c5578063c399ec88146100bc5763c4d66de80361000e576100b7610f74565b61000e565b506100b7610e77565b506100b7610df2565b506100b7610d82565b506100b7610d34565b506100b7610ce1565b506100b7610bc5565b506100b76109ad565b506100b7610771565b506100b76106f3565b506100b76104e7565b506100b7610392565b506100b761014b565b73ffffffffffffffffffffffffffffffffffffffff81160361014657565b600080fd5b5034610146577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6080813601126101465760043567ffffffffffffffff81116101465761016081600401928236030112610146576101aa604435610128565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163303610303576102016101f66024358461195d565b92604483019061161f565b90501561022c575b61022882610218606435611670565b6040519081529081906020820190565b0390f35b6024600054916bffffffffffffffffffffffff92838160101c169384146102f6575b7fffffffffffffffffffffffffffffffffffff000000000000000000000000ffff166001840160101b6dffffffffffffffffffffffff000016176000550135036102985738610209565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e6365000000000000000000006044820152fd5b6102fe6116de565b61024e565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b9181601f840112156101465782359167ffffffffffffffff8311610146576020808501948460051b01011161014657565b50346101465760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101465767ffffffffffffffff600435818111610146576103e3903690600401610361565b9091602435908111610146576103fd903690600401610361565b91906104076118a7565b8282036104895760005b82811061041a57005b8061044e61043361042e600194878a61173e565b61175c565b610448610441848988611766565b3691610976565b90611c82565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461047c575b01610411565b6104846116de565b610476565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b50346101465760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101465760043561052381610128565b73ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001691610569833014156110d8565b6105987f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc938285541614611163565b6105a0611c99565b604051906105ad826108b4565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156105e75750506100199150611295565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa600091816106c3575b506106b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b610019936106be911461120a565b611381565b6106e591925060203d81116106ec575b6106dd81836108ec565b8101906111ee565b9038610626565b503d6106d3565b506000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261076e57808080803473ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af16107656114c0565b501561076e5780f35b80fd5b503461014657600060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261076e576004356107af81610128565b6107b7611c99565b8173ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b1561085f576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af18015610852575b610846575080f35b61084f90610893565b80f35b61085a6111fd565b61083e565b8280fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff81116108a757604052565b6108af610863565b604052565b6020810190811067ffffffffffffffff8211176108a757604052565b6060810190811067ffffffffffffffff8211176108a757604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176108a757604052565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209267ffffffffffffffff8111610969575b01160190565b610971610863565b610963565b9291926109828261092d565b9161099060405193846108ec565b829481845281830111610146578281602093846000960137010152565b5060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610146576004356109e481610128565b60243567ffffffffffffffff8111610146573660238201121561014657610a15903690602481600401359101610976565b9073ffffffffffffffffffffffffffffffffffffffff91827f00000000000000000000000000000000000000000000000000000000000000001692610a5c843014156110d8565b610a8b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc948286541614611163565b610a93611c99565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610ac95750506100199150611295565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa60009181610ba5575b50610b92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b61001993610ba0911461120a565b611460565b610bbe91925060203d81116106ec576106dd81836108ec565b9038610b08565b50346101465760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101465773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610c5d576040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152602090f35b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b50346101465760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014657602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b50346101465760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101465760206bffffffffffffffffffffffff60005460101c16604051908152f35b50346101465760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014657602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101465760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014657600435610e2e81610128565b6044359067ffffffffffffffff908183116101465736602384011215610146578260040135918211610146573660248385010111610146576024610019930190602435906116aa565b5034610146576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261076e576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610f67575b8291610f2d575b604051828152602090f35b90506020813d8211610f5f575b81610f47602093836108ec565b81010312610f5b5761022891505138610f22565b5080fd5b3d9150610f3a565b610f6f6111fd565b610f1b565b50346101465760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014657600435610fb081610128565b61101260005491610fd860ff8460081c1615809481956110ca575b81156110aa575b50611790565b8261100960017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006000541617600055565b6110745761181b565b61101857005b6110457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff60005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b6110a56101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff6000541617600055565b61181b565b303b159150816110bc575b5038610fd2565b6001915060ff1614386110b5565b600160ff8216109150610fcb565b156110df57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152fd5b1561116a57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152fd5b90816020910312610146575190565b506040513d6000823e3d90fd5b1561121157565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152fd5b803b156112fd5773ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b9061138b82611295565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2805115801590611458575b6113da575050565b61145591600080604051936113ee856108d0565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208601527f206661696c6564000000000000000000000000000000000000000000000000006040860152602081519101845af461144f6114c0565b91611555565b50565b5060006113d2565b9061146a82611295565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28051158015906114b8576113da575050565b5060016113d2565b3d156114eb573d906114d18261092d565b916114df60405193846108ec565b82523d6000602084013e565b606090565b156114f757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b919290156115785750815115611569575090565b611575903b15156114f0565b90565b82519091501561158b5750805190602001fd5b604051907f08c379a000000000000000000000000000000000000000000000000000000000825281602080600483015282519283602484015260005b848110611608575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f836000604480968601015201168101030190fd5b8181018301518682016044015285935082016115c7565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610146570180359067ffffffffffffffff82116101465760200191813603831361014657565b806116785750565b600080808093337ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1506114556114c0565b6116bb6000949385946104416118a7565b91602083519301915af16116cd6114c0565b90156116d65750565b602081519101fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b919081101561174f575b60051b0190565b61175761170e565b611748565b3561157581610128565b909161177f92811015611783575b60051b81019061161f565b9091565b61178b61170e565b611774565b1561179757565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff80911690817fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001557f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de600080a3565b73ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016331490811561194f575b50156118f157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b9050600154163314386118e9565b9060405160208101917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008352603c820152603c815261199b816108d0565b5190206119df6119d773ffffffffffffffffffffffffffffffffffffffff926119d161044185600154169661014081019061161f565b90611bb1565b919091611a28565b16036119ea57600090565b600190565b600511156119f957565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b611a31816119ef565b80611a395750565b611a42816119ef565b60018103611aa9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611ab2816119ef565b60028103611b19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b80611b256003926119ef565b14611b2c57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b906041815114600014611bdb5761177f916020820151906060604084015193015160001a90611be5565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311611c765791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15611c69575b815173ffffffffffffffffffffffffffffffffffffffff811615611c63579190565b50600190565b611c716111fd565b611c41565b50505050600090600390565b600091829182602083519301915af16116cd6114c0565b73ffffffffffffffffffffffffffffffffffffffff6001541633148015611d20575b15611cc257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152fd5b50303314611cbb56fea264697066735822122083ef20ce2e7eb48991c68961eee3e1f6ba2a8992806e7d8af25d9cb6a43b1ac464736f6c63430008110033";

type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<SimpleAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccount {
    return super.attach(address) as SimpleAccount;
  }
  override connect(signer: Signer): SimpleAccount__factory {
    return super.connect(signer) as SimpleAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountInterface {
    return new utils.Interface(_abi) as SimpleAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccount {
    return new Contract(address, _abi, signerOrProvider) as SimpleAccount;
  }
}
