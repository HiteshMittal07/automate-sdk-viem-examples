// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleContract {
    uint256 public _myNumber;

    function updateNumber() external {
        _myNumber++;
    }
}
