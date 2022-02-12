// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IDistributionable {

    function initialize() external;

    function claimReleasedTokens() external ;

}
