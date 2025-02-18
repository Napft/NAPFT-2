// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDT is ERC20 {
    constructor() ERC20("Tether USD", "USDT") {
        _mint(msg.sender, 1000000 * 10**6); // Mint 1,000,000 USDT (USDT has 6 decimals)
    }

    function faucet(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
