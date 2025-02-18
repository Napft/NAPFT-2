// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INapFT {
    function createToken(string memory tokenURI, uint256 price, uint256 royaltyFee) external;
}

contract MaliciousMinter {
    INapFT public napft;

    constructor(address _napft) {
        napft = INapFT(_napft);
    }

    function mintNFT() public {
        napft.createToken("ipfs://malicious-token", 10 * 10**6, 5);
    }
}
