const NFTmarketplaceABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_fromTokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_toTokenId",
            "type": "uint256"
          }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "Buy",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousAdmin",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "NewAdmin",
            "type": "address"
          }
        ],
        "name": "LogchangeAdmin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "MetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "string",
            "name": "tokenURI",
            "type": "string"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "Admin",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "GetCreatorOfNft",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "GetCurrentToken",
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "GetNFTDetails",
        "outputs": [
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "IpfsHash",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "GetNftPrice",
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "GetTransactionHistory",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "MyTotalNft",
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
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "UpdateNftPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newadmin",
            "type": "address"
          }
        ],
        "name": "changeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "tokenURI",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "royalityfee",
            "type": "uint8"
          }
        ],
        "name": "creatToken",
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getRoyalityFee",
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
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "removeFromMarketplace",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "serviceFee",
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
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_serviceFee",
            "type": "uint256"
          }
        ],
        "name": "updateServiceFee",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
  ];
  
  const NFTmarketplaceBytecode = "0x60a06040523480156200001157600080fd5b506040518060400160405280600881526020017f4e617066746465760000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f4e4150465400000000000000000000000000000000000000000000000000000081525081600090816200008f9190620003e2565b508060019081620000a19190620003e2565b5050503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060fa600a81905550620004c9565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001ea57607f821691505b6020821081036200020057620001ff620001a2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200026a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200022b565b6200027686836200022b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002c3620002bd620002b7846200028e565b62000298565b6200028e565b9050919050565b6000819050919050565b620002df83620002a2565b620002f7620002ee82620002ca565b84845462000238565b825550505050565b600090565b6200030e620002ff565b6200031b818484620002d4565b505050565b5b8181101562000343576200033760008262000304565b60018101905062000321565b5050565b601f82111562000392576200035c8162000206565b62000367846200021b565b8101602085101562000377578190505b6200038f62000386856200021b565b83018262000320565b50505b505050565b600082821c905092915050565b6000620003b76000198460080262000397565b1980831691505092915050565b6000620003d28383620003a4565b9150826002028217905092915050565b620003ed8262000168565b67ffffffffffffffff81111562000409576200040862000173565b5b620004158254620001d1565b6200042282828562000347565b600060209050601f8311600181146200045a576000841562000445578287015190505b620004518582620003c4565b865550620004c1565b601f1984166200046a8662000206565b60005b8281101562000494578489015182556001820191506020850194506020810190506200046d565b86831015620004b45784890151620004b0601f891682620003a4565b8355505b6001600288020188555050505b505050505050565b6080516141cf620004e56000396000610cf201526141cf6000f3fe6080604052600436106101c25760003560e01c80638d610c67116100f7578063b88d4fde11610095578063e9406b3411610064578063e9406b341461066f578063e985e9c5146106ac578063fd12f789146106e9578063ff1b636d14610726576101c2565b8063b88d4fde146105b0578063bd46a643146105d9578063c87b56dd14610616578063d96a094a14610653576101c2565b8063a22cb465116100d1578063a22cb46514610505578063ab38cb561461052e578063ae4b7c2614610557578063b5ce14a414610573576101c2565b80638d610c67146104865780638f283970146104b157806395d89b41146104da576101c2565b80633ccfd60b116101645780636352211e1161013e5780636352211e146103a45780636e2a10d3146103e157806370a082311461041e5780638abdf5aa1461045b576101c2565b80633ccfd60b1461033b57806342842e0e146103525780634414b5a21461037b576101c2565b8063095ea7b3116101a0578063095ea7b31461026c5780632293922f1461029557806323b872dd146102d5578063300929eb146102fe576101c2565b806301ffc9a7146101c757806306fdde0314610204578063081812fc1461022f575b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e99190612c5f565b610751565b6040516101fb9190612ca7565b60405180910390f35b34801561021057600080fd5b506102196107b2565b6040516102269190612d52565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190612daa565b610844565b6040516102639190612e18565b60405180910390f35b34801561027857600080fd5b50610293600480360381019061028e9190612e5f565b610860565b005b3480156102a157600080fd5b506102bc60048036038101906102b79190612daa565b610876565b6040516102cc9493929190612eae565b60405180910390f35b3480156102e157600080fd5b506102fc60048036038101906102f79190612efa565b610903565b005b34801561030a57600080fd5b5061032560048036038101906103209190612daa565b610a05565b6040516103329190612f69565b60405180910390f35b34801561034757600080fd5b50610350610a2f565b005b34801561035e57600080fd5b5061037960048036038101906103749190612efa565b610b08565b005b34801561038757600080fd5b506103a2600480360381019061039d9190612f84565b610b28565b005b3480156103b057600080fd5b506103cb60048036038101906103c69190612daa565b610bba565b6040516103d89190612e18565b60405180910390f35b3480156103ed57600080fd5b5061040860048036038101906104039190612daa565b610bcc565b6040516104159190612e18565b60405180910390f35b34801561042a57600080fd5b5061044560048036038101906104409190612fc4565b610c26565b6040516104529190612ff1565b60405180910390f35b34801561046757600080fd5b50610470610ce0565b60405161047d9190612ff1565b60405180910390f35b34801561049257600080fd5b5061049b610ce6565b6040516104a89190612ff1565b60405180910390f35b3480156104bd57600080fd5b506104d860048036038101906104d39190612fc4565b610cf0565b005b3480156104e657600080fd5b506104ef610ec3565b6040516104fc9190612d52565b60405180910390f35b34801561051157600080fd5b5061052c60048036038101906105279190613038565b610f55565b005b34801561053a57600080fd5b5061055560048036038101906105509190612daa565b610f6b565b005b610571600480360381019061056c9190612daa565b610ff5565b005b34801561057f57600080fd5b5061059a60048036038101906105959190612daa565b61108f565b6040516105a79190613136565b60405180910390f35b3480156105bc57600080fd5b506105d760048036038101906105d2919061328d565b611130565b005b3480156105e557600080fd5b5061060060048036038101906105fb91906133dd565b61114d565b60405161060d9190612ff1565b60405180910390f35b34801561062257600080fd5b5061063d60048036038101906106389190612daa565b611350565b60405161064a9190612d52565b60405180910390f35b61066d60048036038101906106689190612daa565b611463565b005b34801561067b57600080fd5b5061069660048036038101906106919190612daa565b611a0a565b6040516106a39190612ff1565b60405180910390f35b3480156106b857600080fd5b506106d360048036038101906106ce919061344c565b611a27565b6040516106e09190612ca7565b60405180910390f35b3480156106f557600080fd5b50610710600480360381019061070b9190612fc4565b611abb565b60405161071d9190612ff1565b60405180910390f35b34801561073257600080fd5b5061073b611b3e565b6040516107489190612e18565b60405180910390f35b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107ab57506107aa82611b64565b5b9050919050565b6060600080546107c1906134bb565b80601f01602080910402602001604051908101604052809291908181526020018280546107ed906134bb565b801561083a5780601f1061080f5761010080835404028352916020019161083a565b820191906000526020600020905b81548152906001019060200180831161081d57829003601f168201915b5050505050905090565b600061084f82611c46565b5061085982611cce565b9050919050565b610872828261086d611d0b565b611d13565b5050565b60008060006060600d60008681526020019081526020016000206000815481106108a3576108a26134ec565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693506108d985610bba565b9250600b60008681526020019081526020016000205491506108fa85611350565b90509193509193565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109755760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161096c9190612e18565b60405180910390fd5b60006109898383610984611d0b565b611d25565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109ff578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016109f69392919061351b565b60405180910390fd5b50505050565b6000600c600083815260200190815260200160002060009054906101000a900460ff169050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610abf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab69061359e565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610b05573d6000803e3d6000fd5b50565b610b2383838360405180602001604052806000815250611130565b505050565b610b3182610bba565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b959061360a565b60405180910390fd5b80600b6000848152602001908152602001600020819055505050565b6000610bc582611c46565b9050919050565b6000600d6000838152602001908152602001600020600081548110610bf457610bf36134ec565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c995760006040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610c909190612e18565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600a5481565b6000600754905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7590613676565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f02b04f3f0d5c6a1bd2508833ba315c5518fe94bd359b25e201e5bd6d804b4b0960405160405180910390a350565b606060018054610ed2906134bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610efe906134bb565b8015610f4b5780601f10610f2057610100808354040283529160200191610f4b565b820191906000526020600020905b815481529060010190602001808311610f2e57829003601f168201915b5050505050905090565b610f67610f60611d0b565b8383611f3f565b5050565b6000610f7682610bba565b90508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fe6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fdd90613708565b60405180910390fd5b610ff13082846120ae565b5050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107c9061359e565b60405180910390fd5b80600a8190555050565b6060600d600083815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561112457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116110da575b50505050509050919050565b61113b848484610903565b6111478484848461221b565b50505050565b60003373ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146111bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b490613774565b60405180910390fd5b60008311611200576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f790613806565b60405180910390fd5b6007600081548092919061121390613855565b919050555060006007549050600d6000828152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600b60008381526020019081526020016000208190555082600c600083815260200190815260200160002060006101000a81548160ff021916908360ff1602179055506112e133826123d2565b6112eb81866123f0565b846040516112f991906138d9565b6040518091039020813373ffffffffffffffffffffffffffffffffffffffff167f85a66b9141978db9980f7e0ce3b468cebf4f7999f32b23091c5c03e798b1ba7a60405160405180910390a4809150509392505050565b606061135b82611c46565b50600060066000848152602001908152602001600020805461137c906134bb565b80601f01602080910402602001604051908101604052809291908181526020018280546113a8906134bb565b80156113f55780601f106113ca576101008083540402835291602001916113f5565b820191906000526020600020905b8154815290600101906020018083116113d857829003601f168201915b50505050509050600061140661244c565b9050600081510361141b57819250505061145e565b6000825111156114505780826040516020016114389291906138f0565b6040516020818303038152906040529250505061145e565b61145984612463565b925050505b919050565b3273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c890613960565b60405180910390fd5b6114da81610bba565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603611547576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153e906139cc565b60405180910390fd5b6000600b6000838152602001908152602001600020549050600061156a83610bba565b90508134146115ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a590613a5e565b60405180910390fd5b600d6000848152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600d600085815260200190815260200160002060008154811061164a576116496134ec565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006064600c600087815260200190815260200160002060009054906101000a900460ff1660ff16856116aa9190613a7e565b6116b49190613aef565b90506000612710600a54866116c99190613a7e565b6116d39190613aef565b9050600081836116e39190613b20565b866116ee9190613b54565b905060008573ffffffffffffffffffffffffffffffffffffffff168260405161171690613bb9565b60006040518083038185875af1925050503d8060008114611753576040519150601f19603f3d011682016040523d82523d6000602084013e611758565b606091505b505090508061179c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179390613c1a565b60405180910390fd5b60008573ffffffffffffffffffffffffffffffffffffffff16856040516117c290613bb9565b60006040518083038185875af1925050503d80600081146117ff576040519150601f19603f3d011682016040523d82523d6000602084013e611804565b606091505b5050905080611848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183f90613cac565b60405180910390fd5b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168560405161189090613bb9565b60006040518083038185875af1925050503d80600081146118cd576040519150601f19603f3d011682016040523d82523d6000602084013e6118d2565b606091505b5050905080611916576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190d90613d18565b60405180910390fd5b61192188338c6120ae565b3373ffffffffffffffffffffffffffffffffffffffff166119418b610bba565b73ffffffffffffffffffffffffffffffffffffffff1614611997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198e90613d84565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f89f5adc174562e07c9c9b1cae7109bbecb21cf9d1b2847e550042b8653c54a0e8c8c6040516119f6929190613da4565b60405180910390a350505050505050505050565b6000600b6000838152602001908152602001600020549050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60003073ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401611af69190612e18565b602060405180830381865afa158015611b13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b379190613de2565b9050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611c2f57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611c3f5750611c3e826124cc565b5b9050919050565b600080611c5283612536565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611cc557826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611cbc9190612ff1565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b611d208383836001612573565b505050565b600080611d3184612536565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611d7357611d72818486612738565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e0457611db5600085600080612573565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611e87576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611fb057816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611fa79190612e18565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516120a19190612ca7565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036121205760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016121179190612e18565b60405180910390fd5b600061212e83836000611d25565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036121a157816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016121989190612ff1565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612215578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161220c9392919061351b565b60405180910390fd5b50505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156123cc578273ffffffffffffffffffffffffffffffffffffffff1663150b7a0261225f611d0b565b8685856040518563ffffffff1660e01b81526004016122819493929190613e64565b6020604051808303816000875af19250505080156122bd57506040513d601f19601f820116820180604052508101906122ba9190613ec5565b60015b612341573d80600081146122ed576040519150601f19603f3d011682016040523d82523d6000602084013e6122f2565b606091505b50600081510361233957836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016123309190612e18565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146123ca57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016123c19190612e18565b60405180910390fd5b505b50505050565b6123ec8282604051806020016040528060008152506127fc565b5050565b80600660008481526020019081526020016000209081612410919061409e565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516124409190612ff1565b60405180910390a15050565b606060405180602001604052806000815250905090565b606061246e82611c46565b50600061247961244c565b9050600081511161249957604051806020016040528060008152506124c4565b806124a384612818565b6040516020016124b49291906138f0565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806125ac5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156126e05760006125bc84611c46565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561262757508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561263a57506126388184611a27565b155b1561267c57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016126739190612e18565b60405180910390fd5b81156126de57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6127438383836128e6565b6127f757600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036127b857806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016127af9190612ff1565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016127ee929190614170565b60405180910390fd5b505050565b61280683836129a7565b612813600084848461221b565b505050565b60606000600161282784612aa0565b01905060008167ffffffffffffffff81111561284657612845613162565b5b6040519080825280601f01601f1916602001820160405280156128785781602001600182028036833780820191505090505b509050600082602001820190505b6001156128db578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816128cf576128ce613ac0565b5b04945060008503612886575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561299e57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061295f575061295e8484611a27565b5b8061299d57508273ffffffffffffffffffffffffffffffffffffffff1661298583611cce565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612a195760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612a109190612e18565b60405180910390fd5b6000612a2783836000611d25565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612a9b5760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401612a929190612e18565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612afe577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612af457612af3613ac0565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612b3b576d04ee2d6d415b85acef81000000008381612b3157612b30613ac0565b5b0492506020810190505b662386f26fc100008310612b6a57662386f26fc100008381612b6057612b5f613ac0565b5b0492506010810190505b6305f5e1008310612b93576305f5e1008381612b8957612b88613ac0565b5b0492506008810190505b6127108310612bb8576127108381612bae57612bad613ac0565b5b0492506004810190505b60648310612bdb5760648381612bd157612bd0613ac0565b5b0492506002810190505b600a8310612bea576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612c3c81612c07565b8114612c4757600080fd5b50565b600081359050612c5981612c33565b92915050565b600060208284031215612c7557612c74612bfd565b5b6000612c8384828501612c4a565b91505092915050565b60008115159050919050565b612ca181612c8c565b82525050565b6000602082019050612cbc6000830184612c98565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612cfc578082015181840152602081019050612ce1565b60008484015250505050565b6000601f19601f8301169050919050565b6000612d2482612cc2565b612d2e8185612ccd565b9350612d3e818560208601612cde565b612d4781612d08565b840191505092915050565b60006020820190508181036000830152612d6c8184612d19565b905092915050565b6000819050919050565b612d8781612d74565b8114612d9257600080fd5b50565b600081359050612da481612d7e565b92915050565b600060208284031215612dc057612dbf612bfd565b5b6000612dce84828501612d95565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612e0282612dd7565b9050919050565b612e1281612df7565b82525050565b6000602082019050612e2d6000830184612e09565b92915050565b612e3c81612df7565b8114612e4757600080fd5b50565b600081359050612e5981612e33565b92915050565b60008060408385031215612e7657612e75612bfd565b5b6000612e8485828601612e4a565b9250506020612e9585828601612d95565b9150509250929050565b612ea881612d74565b82525050565b6000608082019050612ec36000830187612e09565b612ed06020830186612e09565b612edd6040830185612e9f565b8181036060830152612eef8184612d19565b905095945050505050565b600080600060608486031215612f1357612f12612bfd565b5b6000612f2186828701612e4a565b9350506020612f3286828701612e4a565b9250506040612f4386828701612d95565b9150509250925092565b600060ff82169050919050565b612f6381612f4d565b82525050565b6000602082019050612f7e6000830184612f5a565b92915050565b60008060408385031215612f9b57612f9a612bfd565b5b6000612fa985828601612d95565b9250506020612fba85828601612d95565b9150509250929050565b600060208284031215612fda57612fd9612bfd565b5b6000612fe884828501612e4a565b91505092915050565b60006020820190506130066000830184612e9f565b92915050565b61301581612c8c565b811461302057600080fd5b50565b6000813590506130328161300c565b92915050565b6000806040838503121561304f5761304e612bfd565b5b600061305d85828601612e4a565b925050602061306e85828601613023565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6130ad81612df7565b82525050565b60006130bf83836130a4565b60208301905092915050565b6000602082019050919050565b60006130e382613078565b6130ed8185613083565b93506130f883613094565b8060005b8381101561312957815161311088826130b3565b975061311b836130cb565b9250506001810190506130fc565b5085935050505092915050565b6000602082019050818103600083015261315081846130d8565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61319a82612d08565b810181811067ffffffffffffffff821117156131b9576131b8613162565b5b80604052505050565b60006131cc612bf3565b90506131d88282613191565b919050565b600067ffffffffffffffff8211156131f8576131f7613162565b5b61320182612d08565b9050602081019050919050565b82818337600083830152505050565b600061323061322b846131dd565b6131c2565b90508281526020810184848401111561324c5761324b61315d565b5b61325784828561320e565b509392505050565b600082601f83011261327457613273613158565b5b813561328484826020860161321d565b91505092915050565b600080600080608085870312156132a7576132a6612bfd565b5b60006132b587828801612e4a565b94505060206132c687828801612e4a565b93505060406132d787828801612d95565b925050606085013567ffffffffffffffff8111156132f8576132f7612c02565b5b6133048782880161325f565b91505092959194509250565b600067ffffffffffffffff82111561332b5761332a613162565b5b61333482612d08565b9050602081019050919050565b600061335461334f84613310565b6131c2565b9050828152602081018484840111156133705761336f61315d565b5b61337b84828561320e565b509392505050565b600082601f83011261339857613397613158565b5b81356133a8848260208601613341565b91505092915050565b6133ba81612f4d565b81146133c557600080fd5b50565b6000813590506133d7816133b1565b92915050565b6000806000606084860312156133f6576133f5612bfd565b5b600084013567ffffffffffffffff81111561341457613413612c02565b5b61342086828701613383565b935050602061343186828701612d95565b9250506040613442868287016133c8565b9150509250925092565b6000806040838503121561346357613462612bfd565b5b600061347185828601612e4a565b925050602061348285828601612e4a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134d357607f821691505b6020821081036134e6576134e561348c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006060820190506135306000830186612e09565b61353d6020830185612e9f565b61354a6040830184612e09565b949350505050565b7f41646d696e20756e617574686f72697a65640000000000000000000000000000600082015250565b6000613588601283612ccd565b915061359382613552565b602082019050919050565b600060208201905081810360008301526135b78161357b565b9050919050565b7f4f776e657220556e617574686f72697a65640000000000000000000000000000600082015250565b60006135f4601283612ccd565b91506135ff826135be565b602082019050919050565b60006020820190508181036000830152613623816135e7565b9050919050565b7f4f776e657220756e617574686f72697a65640000000000000000000000000000600082015250565b6000613660601283612ccd565b915061366b8261362a565b602082019050919050565b6000602082019050818103600083015261368f81613653565b9050919050565b7f4f6e6c7920746865206f776e65722063616e2072656d6f76652074686569722060008201527f4e46542066726f6d20746865206d61726b6574706c6163650000000000000000602082015250565b60006136f2603883612ccd565b91506136fd82613696565b604082019050919050565b60006020820190508181036000830152613721816136e5565b9050919050565b7f6f6e6c7920627920454f412063616e206d696e74204e46540000000000000000600082015250565b600061375e601883612ccd565b915061376982613728565b602082019050919050565b6000602082019050818103600083015261378d81613751565b9050919050565b7f73686f756c6420626520736f6d652076616c7561626c65207072696365206f6660008201527f206e667400000000000000000000000000000000000000000000000000000000602082015250565b60006137f0602483612ccd565b91506137fb82613794565b604082019050919050565b6000602082019050818103600083015261381f816137e3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061386082612d74565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361389257613891613826565b5b600182019050919050565b600081905092915050565b60006138b382612cc2565b6138bd818561389d565b93506138cd818560208601612cde565b80840191505092915050565b60006138e582846138a8565b915081905092915050565b60006138fc82856138a8565b915061390882846138a8565b91508190509392505050565b7f4f6e6c7920454f412063616e20696e7465726163740000000000000000000000600082015250565b600061394a601583612ccd565b915061395582613914565b602082019050919050565b600060208201905081810360008301526139798161393d565b9050919050565b7f596f752063616e27742062757920796f7572206f776e204e4654000000000000600082015250565b60006139b6601a83612ccd565b91506139c182613980565b602082019050919050565b600060208201905081810360008301526139e5816139a9565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b6000613a48604083612ccd565b9150613a53826139ec565b604082019050919050565b60006020820190508181036000830152613a7781613a3b565b9050919050565b6000613a8982612d74565b9150613a9483612d74565b9250828202613aa281612d74565b91508282048414831517613ab957613ab8613826565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613afa82612d74565b9150613b0583612d74565b925082613b1557613b14613ac0565b5b828204905092915050565b6000613b2b82612d74565b9150613b3683612d74565b9250828201905080821115613b4e57613b4d613826565b5b92915050565b6000613b5f82612d74565b9150613b6a83612d74565b9250828203905081811115613b8257613b81613826565b5b92915050565b600081905092915050565b50565b6000613ba3600083613b88565b9150613bae82613b93565b600082019050919050565b6000613bc482613b96565b9150819050919050565b7f507572636861736520556e7375636365737366756c0000000000000000000000600082015250565b6000613c04601583612ccd565b9150613c0f82613bce565b602082019050919050565b60006020820190508181036000830152613c3381613bf7565b9050919050565b7f526f79616c69747920666565207472616e73666572206661696c656420746f2060008201527f63726561746f7200000000000000000000000000000000000000000000000000602082015250565b6000613c96602783612ccd565b9150613ca182613c3a565b604082019050919050565b60006020820190508181036000830152613cc581613c89565b9050919050565b7f5365727669636520666565207472616e73666572206661696c65640000000000600082015250565b6000613d02601b83612ccd565b9150613d0d82613ccc565b602082019050919050565b60006020820190508181036000830152613d3181613cf5565b9050919050565b7f4e4654206e6f74207472616e7366726564000000000000000000000000000000600082015250565b6000613d6e601183612ccd565b9150613d7982613d38565b602082019050919050565b60006020820190508181036000830152613d9d81613d61565b9050919050565b6000604082019050613db96000830185612e9f565b613dc66020830184612e9f565b9392505050565b600081519050613ddc81612d7e565b92915050565b600060208284031215613df857613df7612bfd565b5b6000613e0684828501613dcd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000613e3682613e0f565b613e408185613e1a565b9350613e50818560208601612cde565b613e5981612d08565b840191505092915050565b6000608082019050613e796000830187612e09565b613e866020830186612e09565b613e936040830185612e9f565b8181036060830152613ea58184613e2b565b905095945050505050565b600081519050613ebf81612c33565b92915050565b600060208284031215613edb57613eda612bfd565b5b6000613ee984828501613eb0565b91505092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613f547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613f17565b613f5e8683613f17565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613f9b613f96613f9184612d74565b613f76565b612d74565b9050919050565b6000819050919050565b613fb583613f80565b613fc9613fc182613fa2565b848454613f24565b825550505050565b600090565b613fde613fd1565b613fe9818484613fac565b505050565b5b8181101561400d57614002600082613fd6565b600181019050613fef565b5050565b601f8211156140525761402381613ef2565b61402c84613f07565b8101602085101561403b578190505b61404f61404785613f07565b830182613fee565b50505b505050565b600082821c905092915050565b600061407560001984600802614057565b1980831691505092915050565b600061408e8383614064565b9150826002028217905092915050565b6140a782612cc2565b67ffffffffffffffff8111156140c0576140bf613162565b5b6140ca82546134bb565b6140d5828285614011565b600060209050601f83116001811461410857600084156140f6578287015190505b6141008582614082565b865550614168565b601f19841661411686613ef2565b60005b8281101561413e57848901518255600182019150602085019450602081019050614119565b8683101561415b5784890151614157601f891682614064565b8355505b6001600288020188555050505b505050505050565b60006040820190506141856000830185612e09565b6141926020830184612e9f565b939250505056fea2646970667358221220af732a0a139b046caf94189c21d236a58b0c95981f9db33df917c996fe6a0e2264736f6c63430008180033";
  
  module.exports = { NFTmarketplaceABI, NFTmarketplaceBytecode };
  