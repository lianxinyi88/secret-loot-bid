// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SecretLootBid is SepoliaConfig {
    using FHE for *;
    
    struct LootBox {
        euint32 boxId;
        euint32 reservePrice;
        euint32 currentBid;
        euint32 bidCount;
        bool isActive;
        bool isRevealed;
        string name;
        string description;
        string imageUri;
        address owner;
        address highestBidder;
        uint256 startTime;
        uint256 endTime;
        uint256 revealTime;
    }
    
    struct Bid {
        euint32 bidId;
        euint32 amount;
        address bidder;
        uint256 timestamp;
        bool isRevealed;
    }
    
    struct LootItem {
        euint32 itemId;
        euint32 rarity;
        euint32 value;
        string name;
        string description;
        string imageUri;
    }
    
    mapping(uint256 => LootBox) public lootBoxes;
    mapping(uint256 => Bid) public bids;
    mapping(uint256 => LootItem) public lootItems;
    mapping(address => euint32) public bidderReputation;
    mapping(address => euint32) public totalBids;
    
    uint256 public boxCounter;
    uint256 public bidCounter;
    uint256 public itemCounter;
    
    address public owner;
    address public verifier;
    uint256 public platformFee = 250; // 2.5%
    
    event LootBoxCreated(uint256 indexed boxId, address indexed owner, string name);
    event BidPlaced(uint256 indexed bidId, uint256 indexed boxId, address indexed bidder, uint32 amount);
    event BidRevealed(uint256 indexed bidId, uint256 indexed boxId, address indexed bidder, uint32 amount);
    event LootBoxRevealed(uint256 indexed boxId, address indexed winner, uint32 winningBid);
    event LootBoxClaimed(uint256 indexed boxId, address indexed winner);
    event ReputationUpdated(address indexed bidder, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createLootBox(
        string memory _name,
        string memory _description,
        string memory _imageUri,
        uint256 _duration,
        externalEuint32 reservePrice,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(_duration > 0, "Duration must be positive");
        
        uint256 boxId = boxCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalReservePrice = FHE.fromExternal(reservePrice, inputProof);
        
        lootBoxes[boxId] = LootBox({
            boxId: FHE.asEuint32(0), // Will be set properly later
            reservePrice: internalReservePrice,
            currentBid: FHE.asEuint32(0),
            bidCount: FHE.asEuint32(0),
            isActive: true,
            isRevealed: false,
            name: _name,
            description: _description,
            imageUri: _imageUri,
            owner: msg.sender,
            highestBidder: address(0),
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            revealTime: 0
        });
        
        emit LootBoxCreated(boxId, msg.sender, _name);
        return boxId;
    }
    
    function placeBid(
        uint256 boxId,
        externalEuint32 bidAmount,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(lootBoxes[boxId].owner != address(0), "Loot box does not exist");
        require(lootBoxes[boxId].isActive, "Loot box is not active");
        require(block.timestamp <= lootBoxes[boxId].endTime, "Bidding has ended");
        
        uint256 bidId = bidCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalBidAmount = FHE.fromExternal(bidAmount, inputProof);
        
        bids[bidId] = Bid({
            bidId: FHE.asEuint32(0), // Will be set properly later
            amount: internalBidAmount,
            bidder: msg.sender,
            timestamp: block.timestamp,
            isRevealed: false
        });
        
        // Update loot box totals
        lootBoxes[boxId].currentBid = FHE.add(lootBoxes[boxId].currentBid, internalBidAmount);
        lootBoxes[boxId].bidCount = FHE.add(lootBoxes[boxId].bidCount, FHE.asEuint32(1));
        
        // Update bidder reputation
        totalBids[msg.sender] = FHE.add(totalBids[msg.sender], FHE.asEuint32(1));
        
        emit BidPlaced(bidId, boxId, msg.sender, 0); // Amount will be decrypted off-chain
        return bidId;
    }
    
    function revealBid(
        uint256 bidId,
        uint32 revealedAmount,
        bytes32 commitment
    ) public {
        require(bids[bidId].bidder == msg.sender, "Only bidder can reveal");
        require(!bids[bidId].isRevealed, "Bid already revealed");
        require(block.timestamp > lootBoxes[bidId].endTime, "Bidding still active");
        
        // Verify commitment
        require(keccak256(abi.encodePacked(revealedAmount, msg.sender)) == commitment, "Invalid commitment");
        
        bids[bidId].isRevealed = true;
        
        emit BidRevealed(bidId, 0, msg.sender, revealedAmount); // boxId will be determined off-chain
    }
    
    function revealLootBox(uint256 boxId) public {
        require(lootBoxes[boxId].owner == msg.sender, "Only owner can reveal");
        require(block.timestamp > lootBoxes[boxId].endTime, "Bidding still active");
        require(!lootBoxes[boxId].isRevealed, "Already revealed");
        
        lootBoxes[boxId].isRevealed = true;
        lootBoxes[boxId].revealTime = block.timestamp;
        
        emit LootBoxRevealed(boxId, address(0), 0); // Winner and amount will be determined off-chain
    }
    
    function claimLootBox(uint256 boxId) public {
        require(lootBoxes[boxId].isRevealed, "Loot box not revealed");
        require(lootBoxes[boxId].highestBidder == msg.sender, "Not the winner");
        require(lootBoxes[boxId].isActive, "Already claimed");
        
        lootBoxes[boxId].isActive = false;
        
        // Transfer loot box to winner
        // In a real implementation, this would transfer the actual loot items
        
        emit LootBoxClaimed(boxId, msg.sender);
    }
    
    function updateReputation(address bidder, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(bidder != address(0), "Invalid bidder address");
        
        bidderReputation[bidder] = reputation;
        
        emit ReputationUpdated(bidder, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function getLootBoxInfo(uint256 boxId) public view returns (
        string memory name,
        string memory description,
        string memory imageUri,
        uint8 reservePrice,
        uint8 currentBid,
        uint8 bidCount,
        bool isActive,
        bool isRevealed,
        address owner,
        address highestBidder,
        uint256 startTime,
        uint256 endTime,
        uint256 revealTime
    ) {
        LootBox storage box = lootBoxes[boxId];
        return (
            box.name,
            box.description,
            box.imageUri,
            0, // FHE.decrypt(box.reservePrice) - will be decrypted off-chain
            0, // FHE.decrypt(box.currentBid) - will be decrypted off-chain
            0, // FHE.decrypt(box.bidCount) - will be decrypted off-chain
            box.isActive,
            box.isRevealed,
            box.owner,
            box.highestBidder,
            box.startTime,
            box.endTime,
            box.revealTime
        );
    }
    
    function getBidInfo(uint256 bidId) public view returns (
        uint8 amount,
        address bidder,
        uint256 timestamp,
        bool isRevealed
    ) {
        Bid storage bid = bids[bidId];
        return (
            0, // FHE.decrypt(bid.amount) - will be decrypted off-chain
            bid.bidder,
            bid.timestamp,
            bid.isRevealed
        );
    }
    
    function getBidderReputation(address bidder) public view returns (uint8) {
        return 0; // FHE.decrypt(bidderReputation[bidder]) - will be decrypted off-chain
    }
    
    function getTotalBids(address bidder) public view returns (uint8) {
        return 0; // FHE.decrypt(totalBids[bidder]) - will be decrypted off-chain
    }
    
    function withdrawFunds(uint256 boxId) public {
        require(lootBoxes[boxId].owner == msg.sender, "Only owner can withdraw");
        require(lootBoxes[boxId].isRevealed, "Loot box must be revealed");
        require(!lootBoxes[boxId].isActive, "Loot box still active");
        
        // Calculate platform fee and transfer funds
        // In a real implementation, this would handle the actual fund transfers
        
        lootBoxes[boxId].isActive = false;
    }
    
    function setPlatformFee(uint256 newFee) public {
        require(msg.sender == owner, "Only owner can set fee");
        require(newFee <= 1000, "Fee cannot exceed 10%");
        
        platformFee = newFee;
    }
    
    function setVerifier(address newVerifier) public {
        require(msg.sender == owner, "Only owner can set verifier");
        require(newVerifier != address(0), "Invalid verifier address");
        
        verifier = newVerifier;
    }
}
