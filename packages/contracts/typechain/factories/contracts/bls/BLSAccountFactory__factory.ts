/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BLSAccountFactory,
  BLSAccountFactoryInterface,
} from "../../../contracts/bls/BLSAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract BLSAccount",
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
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract BLSAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "getAddress",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161305d38038061305d83398101604081905261002f916100aa565b818160405161003d90610085565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100e49050565b61224580610e1883390190565b6001600160a01b03811681146100a757600080fd5b50565b600080604083850312156100bd57600080fd5b82516100c881610092565b60208401519092506100d981610092565b809150509250929050565b608051610d0d61010b60003960008181604b0152818160f7015261020d0152610d0d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe1461004657806319c2a1b214610096578063de3398dd146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461038e565b6100bc565b61006d6100b736600461038e565b6101de565b6000806100c984846101de565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101d8565b8460001b7f0000000000000000000000000000000000000000000000000000000000000000856040516024016101279190610418565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f3600000000000000000000000000000000000000000000000000000000179052516101a790610352565b6101b2929190610479565b8190604051809103906000f59050801580156101d2573d6000803e3d6000fd5b50925050505b92915050565b60006103198360001b604051806020016101f790610352565b6020820181038252601f19601f820116604052507f00000000000000000000000000000000000000000000000000000000000000008560405160240161023d9190610418565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f360000000000000000000000000000000000000000000000000000000017905290516102c293929101610479565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526102fe92916020016104e7565b60405160208183030381529060405280519060200120610320565b9392505050565b60006103198383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107c18061051783390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060a083850312156103a157600080fd5b82359150602084603f8501126103b657600080fd5b6040516080810181811067ffffffffffffffff821117156103d9576103d961035f565b6040528060a08601878111156103ee57600080fd5b8387015b8181101561040957803583529184019184016103f2565b50505080925050509250929050565b60808101818360005b6004811015610440578151835260209283019290910190600101610421565b50505092915050565b60005b8381101561046457818101518382015260200161044c565b83811115610473576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104b4816060850160208701610449565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104f9818460208801610449565b83519083019061050d818360208801610449565b0194935050505056fe60806040526040516107c13803806107c183398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d0838360405180606001604052806027815260200161079a602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b61034d8061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102f1602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610283565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fd5782516000036101f65773ffffffffffffffffffffffffffffffffffffffff85163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610207565b610207838361020f565b949350505050565b81511561021f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed919061029f565b60005b8381101561026e578181015183820152602001610256565b8381111561027d576000848401525b50505050565b60008251610295818460208701610253565b9190910192915050565b60208152600082518060208401526102be816040850160208701610253565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201cd78ab6a31213989661cff2d7d05fc9b9c38b1a848e8249e2e398659a9eb7e364736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e2c5b2ae0371c6449ff42e732bf0cb5808f241b474d76616d1bba5c72b4f5ae264736f6c634300080f003360e0604052306080523480156200001557600080fd5b506040516200224538038062002245833981016040819052620000389162000069565b6001600160a01b0391821660a0521660c052620000a8565b6001600160a01b03811681146200006657600080fd5b50565b600080604083850312156200007d57600080fd5b82516200008a8162000050565b60208401519092506200009d8162000050565b809150509250929050565b60805160a05160c0516121196200012c600039600081816101c00152818161023601526110c501526000818161030f015281816107910152818161082401528181610c0201528181611038015281816112d401526116dc01526000818161059f0152818161064f015281816108e8015281816109980152610add01526121196000f3fe60806040526004361061012d5760003560e01c806352d1902d116100a5578063b61d27f611610074578063c4d66de811610059578063c4d66de814610368578063e02afbae14610388578063ee472f36146103aa57600080fd5b8063b61d27f614610333578063c399ec881461035357600080fd5b806352d1902d146102955780638da5cb5b146102aa578063affed0e0146102d7578063b0d691fe1461030057600080fd5b80633659cfe6116100fc5780634a58db19116100e15780634a58db191461025a5780634d44560d146102625780634f1ef2861461028257600080fd5b80633659cfe6146102075780633ad59dbc1461022757600080fd5b80630825d1fc1461013957806318dfb3c71461016c57806318fc5c441461018e578063245a7bfc146101ae57600080fd5b3661013457005b600080fd5b34801561014557600080fd5b50610159610154366004611ac7565b6103ca565b6040519081526020015b60405180910390f35b34801561017857600080fd5b5061018c610187366004611b7a565b610411565b005b34801561019a57600080fd5b5061018c6101a9366004611c64565b610535565b3480156101ba57600080fd5b506101e27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610163565b34801561021357600080fd5b5061018c610222366004611ce2565b610588565b34801561023357600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101e2565b61018c61078d565b34801561026e57600080fd5b5061018c61027d366004611cff565b61081a565b61018c610290366004611d2b565b6108d1565b3480156102a157600080fd5b50610159610ac3565b3480156102b657600080fd5b506001546101e29073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102e357600080fd5b506000546201000090046bffffffffffffffffffffffff16610159565b34801561030c57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101e2565b34801561033f57600080fd5b5061018c61034e366004611df1565b610baf565b34801561035f57600080fd5b50610159610bfe565b34801561037457600080fd5b5061018c610383366004611ce2565b610cb6565b34801561039457600080fd5b5061039d610e4a565b6040516101639190611e9d565b3480156103b657600080fd5b5061018c6103c5366004611c64565b610e85565b60006103d4611020565b6103df8585856110c1565b90506103ee6040860186611eab565b90506000036104005761040085611183565b61040982611251565b949350505050565b6104196112bc565b828114610487576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b8381101561052e5761051c8585838181106104a7576104a7611f10565b90506020020160208101906104bc9190611ce2565b60008585858181106104d0576104d0611f10565b90506020028101906104e29190611eab565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061137d92505050565b8061052681611f6e565b91505061048a565b5050505050565b61053d6113fa565b7f42e4c4ce1432650f17e41c4ea77ed12c0ab20b229d3ffd84a2ebc9f8abb25a8360028260405161056f929190611fa6565b60405180910390a16105846002826004611a34565b5050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361064d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161047e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166106c27f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610765576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161047e565b61076e81611485565b6040805160008082526020820190925261078a9183919061148d565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163460405160006040518083038185875af1925050503d8060008114610807576040519150601f19603f3d011682016040523d82523d6000602084013e61080c565b606091505b505090508061078a57600080fd5b6108226113fa565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156108b557600080fd5b505af11580156108c9573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610996576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161047e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a0b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610aae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161047e565b610ab782611485565b6105848282600161148d565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610b8a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161047e565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610bb76112bc565b610bf8848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061137d92505050565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610c8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb19190611fdf565b905090565b600054610100900460ff1615808015610cd65750600054600160ff909116105b80610cf05750303b158015610cf0575060005460ff166001145b610d7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161047e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610dda57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610de382611691565b801561058457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a15050565b610e52611a72565b6040805160808101918290529060029060049082845b815481526020019060010190808311610e68575050505050905090565b600054610100900460ff1615808015610ea55750600054600160ff909116105b80610ebf5750303b158015610ebf575060005460ff166001145b610f4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161047e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610fa957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610fb36000611691565b610fc06002836004611a34565b50801561058457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602001610e3e565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146110bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161047e565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f424c534163636f756e743a2077726f6e672061676772656761746f7200000000604482015260640161047e565b5060005b9392505050565b60008054602083013591620100009091046bffffffffffffffffffffffff169060026111ae83611ff8565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff161461078a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e636500000000000000000000604482015260640161047e565b801561078a5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d806000811461052e576040519150601f19603f3d011682016040523d82523d6000602084013e61052e565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480611317575060015473ffffffffffffffffffffffffffffffffffffffff1633145b6110bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161047e565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516113a6919061204f565b60006040518083038185875af1925050503d80600081146113e3576040519150601f19603f3d011682016040523d82523d6000602084013e6113e8565b606091505b50915091508161052e57805160208201fd5b60015473ffffffffffffffffffffffffffffffffffffffff1633148061141f57503330145b6110bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015260640161047e565b61078a6113fa565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156114c5576114c083611726565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561154a575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261154791810190611fdf565b60015b6115d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f742055555053000000000000000000000000000000000000606482015260840161047e565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c65555549440000000000000000000000000000000000000000000000606482015260840161047e565b506114c0838383611830565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560405190917f000000000000000000000000000000000000000000000000000000000000000016907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350565b73ffffffffffffffffffffffffffffffffffffffff81163b6117ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161047e565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61183983611855565b6000825111806118465750805b156114c057610bf883836118a2565b61185e81611726565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606118c783836040518060600160405280602781526020016120bd602791396118d0565b90505b92915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516118fa919061204f565b600060405180830381855af49150503d8060008114611935576040519150601f19603f3d011682016040523d82523d6000602084013e61193a565b606091505b509150915061194b86838387611955565b9695505050505050565b606083156119eb5782516000036119e45773ffffffffffffffffffffffffffffffffffffffff85163b6119e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161047e565b5081610409565b6104098383815115611a005781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047e919061206b565b8260048101928215611a62579160200282015b82811115611a62578251825591602001919060010190611a47565b50611a6e929150611a90565b5090565b60405180608001604052806004906020820280368337509192915050565b5b80821115611a6e5760008155600101611a91565b73ffffffffffffffffffffffffffffffffffffffff8116811461078a57600080fd5b60008060008060808587031215611add57600080fd5b843567ffffffffffffffff811115611af457600080fd5b85016101608188031215611b0757600080fd5b9350602085013592506040850135611b1e81611aa5565b9396929550929360600135925050565b60008083601f840112611b4057600080fd5b50813567ffffffffffffffff811115611b5857600080fd5b6020830191508360208260051b8501011115611b7357600080fd5b9250929050565b60008060008060408587031215611b9057600080fd5b843567ffffffffffffffff80821115611ba857600080fd5b611bb488838901611b2e565b90965094506020870135915080821115611bcd57600080fd5b50611bda87828801611b2e565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611c5c57611c5c611be6565b604052919050565b600060808284031215611c7657600080fd5b82601f830112611c8557600080fd5b6040516080810181811067ffffffffffffffff82111715611ca857611ca8611be6565b604052806080840185811115611cbd57600080fd5b845b81811015611cd7578035835260209283019201611cbf565b509195945050505050565b600060208284031215611cf457600080fd5b813561117c81611aa5565b60008060408385031215611d1257600080fd5b8235611d1d81611aa5565b946020939093013593505050565b60008060408385031215611d3e57600080fd5b8235611d4981611aa5565b915060208381013567ffffffffffffffff80821115611d6757600080fd5b818601915086601f830112611d7b57600080fd5b813581811115611d8d57611d8d611be6565b611dbd847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611c15565b91508082528784828501011115611dd357600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060008060608587031215611e0757600080fd5b8435611e1281611aa5565b935060208501359250604085013567ffffffffffffffff80821115611e3657600080fd5b818701915087601f830112611e4a57600080fd5b813581811115611e5957600080fd5b886020828501011115611e6b57600080fd5b95989497505060200194505050565b8060005b6004811015610bf8578151845260209384019390910190600101611e7e565b608081016118ca8284611e7a565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ee057600080fd5b83018035915067ffffffffffffffff821115611efb57600080fd5b602001915036819003821315611b7357600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f9f57611f9f611f3f565b5060010190565b6101008101818460005b6004811015611fcf578154835260209092019160019182019101611fb0565b50505061117c6080830184611e7a565b600060208284031215611ff157600080fd5b5051919050565b60006bffffffffffffffffffffffff80831681810361201957612019611f3f565b6001019392505050565b60005b8381101561203e578181015183820152602001612026565b83811115610bf85750506000910152565b60008251612061818460208701612023565b9190910192915050565b602081526000825180602084015261208a816040850160208701612023565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201a577967e4faa3b87a05deee4e30b01ab2d3e8b2cf5b3a3fb0491b02543a4c5664736f6c634300080f0033";

type BLSAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLSAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BLSAccountFactory__factory extends ContractFactory {
  constructor(...args: BLSAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BLSAccountFactory> {
    return super.deploy(
      entryPoint,
      aggregator,
      overrides || {}
    ) as Promise<BLSAccountFactory>;
  }
  override getDeployTransaction(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(entryPoint, aggregator, overrides || {});
  }
  override attach(address: string): BLSAccountFactory {
    return super.attach(address) as BLSAccountFactory;
  }
  override connect(signer: Signer): BLSAccountFactory__factory {
    return super.connect(signer) as BLSAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSAccountFactoryInterface {
    return new utils.Interface(_abi) as BLSAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSAccountFactory {
    return new Contract(address, _abi, signerOrProvider) as BLSAccountFactory;
  }
}
