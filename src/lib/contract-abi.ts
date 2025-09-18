export const SECRET_LOOT_BID_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_verifier",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "bidId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "amount",
        "type": "uint32"
      }
    ],
    "name": "BidPlaced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "bidId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "amount",
        "type": "uint32"
      }
    ],
    "name": "BidRevealed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "winner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "winningBid",
        "type": "uint32"
      }
    ],
    "name": "LootBoxClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "LootBoxCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "winner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "winningBid",
        "type": "uint32"
      }
    ],
    "name": "LootBoxRevealed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "reputation",
        "type": "uint32"
      }
    ],
    "name": "ReputationUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      }
    ],
    "name": "claimLootBox",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_imageUri",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_duration",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "reservePrice",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "createLootBox",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      }
    ],
    "name": "getBidInfo",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "amount",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isRevealed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      }
    ],
    "name": "getBidderReputation",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      }
    ],
    "name": "getLootBoxInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "imageUri",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "reservePrice",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "currentBid",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "bidCount",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isRevealed",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "highestBidder",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "revealTime",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      }
    ],
    "name": "getTotalBids",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "bidAmount",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "placeBid",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "platformFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bidId",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "revealedAmount",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "commitment",
        "type": "bytes32"
      }
    ],
    "name": "revealBid",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      }
    ],
    "name": "revealLootBox",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFee",
        "type": "uint256"
      }
    ],
    "name": "setPlatformFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newVerifier",
        "type": "address"
      }
    ],
    "name": "setVerifier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "reputation",
        "type": "bytes"
      }
    ],
    "name": "updateReputation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "boxId",
        "type": "uint256"
      }
    ],
    "name": "withdrawFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
