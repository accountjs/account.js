// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Create2.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "./PrivateRecoveryAccount.sol";

/**
 * A sample factory contract for Account
 * A UserOperations "initCode" holds the address of the factory, and a method call (to createAccount, in this sample factory).
 * The factory's createAccount returns the target account address even if it is already installed.
 * This way, the entryPoint.getSenderAddress() can be called either before or after the account is created.
 */
contract AccountWithSBTFactory is ERC721Enumerable {
    PrivateRecoveryAccount public immutable accountImplementation;

    constructor(IEntryPoint _entryPoint) ERC721("AccountWithSBT", "ASBT") {
        accountImplementation = new PrivateRecoveryAccount(_entryPoint);
    }

    uint tokenCount = 0;

    function _baseURI() internal pure override returns (string memory) {
        return "Test";
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override(ERC721, IERC721) {
        revert("not supported");
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override(ERC721, IERC721) {
        revert("not supported");
    }

    /**
     * create an account, and return its address.
     * returns the address even if the account is already deployed.
     * Note that during UserOperation execution, this method is called only if the account is not deployed.
     * This method returns an existing account address so that entryPoint.getSenderAddress() would work even after account creation
     */
    function createAccount(
        address owner,
        address token,
        address paymaster,
        uint256 salt
    ) public returns (PrivateRecoveryAccount ret) {
        address addr = getAddress(owner, token, paymaster, salt);
        uint codeSize = addr.code.length;
        if (codeSize > 0) {
            return PrivateRecoveryAccount(payable(addr));
        }
        ret = PrivateRecoveryAccount(
            payable(
                new ERC1967Proxy{salt: bytes32(salt)}(
                    address(accountImplementation),
                    abi.encodeCall(PrivateRecoveryAccount.initialize, (owner, token, paymaster))
                )
            )
        );
        _safeMint(addr, tokenCount);
        tokenCount++;
    }

    /**
     * calculate the counterfactual address of this account as it would be returned by createAccount()
     */
    function getAddress(
        address owner,
        address token,
        address paymaster,
        uint256 salt
    ) public view returns (address) {
        bytes memory encodedCall = abi.encodeCall(
            PrivateRecoveryAccount.initialize,
            (owner, token, paymaster)
        );
        bytes memory encodedAbi = abi.encode(
            address(accountImplementation),
            encodedCall
        );
        bytes memory encodedPacked = abi.encodePacked(
            type(ERC1967Proxy).creationCode,
            encodedAbi
        );
        return Create2.computeAddress(bytes32(salt), keccak256(encodedPacked));
    }


}
