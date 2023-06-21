// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WheelOfFortune {
    address public operator;
    address public lastWinner;
    uint256 public winningAmount;

    struct Participant {
        uint256 deposit;
        uint256 winningChance;
    }

    mapping(address => Participant) public participants;
    address[] public participantAddresses;
    uint256 public totalDeposit;
    uint256 public lockedAmount;

    constructor() {
        operator = msg.sender;
    }

    modifier onlyOperator() {
        require(msg.sender == operator, "Only operator can call this function");
        _;
    }

    function setOperator(address _operator) external onlyOperator {
        operator = _operator;
    }

    function depositAndCalculateWinningChance() external payable {
        require(msg.value > 0, "Amount should be greater than 0");

        if (participants[msg.sender].deposit == 0) {
            participantAddresses.push(msg.sender);
        }

        participants[msg.sender].deposit += msg.value;
        totalDeposit += msg.value;

        updateWinningChance();
    }

    function drawWinner() external onlyOperator {
        require(totalDeposit > 0, "Total deposit should be greater than 0");
        require(participantAddresses.length > 0, "No participants available");

        uint256 randomNumber = generateRandomNumber();
        uint256 selectedParticipantIndex = randomNumber % participantAddresses.length;
        address winner = participantAddresses[selectedParticipantIndex];

        require(winner != address(0), "No winner selected");

        uint256 balance = address(this).balance;
        uint256 operatorAmount = balance / 100; 
        lockedAmount += operatorAmount;
        winningAmount = balance - operatorAmount;

        (bool success, ) = winner.call{value: winningAmount}("");
        require(success, "Failed to transfer funds to the winner");

        lastWinner = winner;

        resetParticipants();
    }

    function withdrawLockedAmount() external onlyOperator {
        require(lockedAmount > 0, "No locked amount available");

        (bool success, ) = operator.call{value: lockedAmount}("");
        require(success, "Failed to withdraw locked amount");

        lockedAmount = 0;
    }

    function updateWinningChance() internal {
        for (uint256 i = 0; i < participantAddresses.length; i++) {
            address participantAddress = participantAddresses[i];
            participants[participantAddress].winningChance = (participants[participantAddress].deposit * 100) / totalDeposit;
        }
    }

    function resetParticipants() internal {
        for (uint256 i = 0; i < participantAddresses.length; i++) {
            delete participants[participantAddresses[i]];
        }
        participantAddresses = new address[](0);
        totalDeposit = 0;
    }

    function generateRandomNumber() internal view returns (uint256) {
        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 randomNumber = keccak256(abi.encodePacked(blockHash, block.timestamp, block.coinbase, block.number));
        return uint256(randomNumber);
    }

    function getLastWinner() external view returns (address) {
        return lastWinner;
    }

    function getLockedAmount() external view returns (uint256) {
        return lockedAmount;
    }

    function getParticipantCount() external view returns (uint256) {
        return participantAddresses.length;
    }

    function getWinner() external view returns (address, uint256) {
        return (lastWinner, winningAmount);
    }
}
