const { ethers } = require("hardhat");
const { alchemyApiKey, mnemonic } = require("./secrets.json");
const { NFTmarketplaceABI, NFTmarketplaceBytecode } = require("./constants");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKey}`);
  const wallet = new ethers.Wallet(mnemonic, provider);

  // Create the contract factory
  const NFTmarketplaceFactory = new ethers.ContractFactory(
    NFTmarketplaceABI,
    NFTmarketplaceBytecode,
    wallet
  );

  // Deploy the contract
  const NFTmarketplace = await NFTmarketplaceFactory.deploy();

  await NFTmarketplace.deployed();

  console.log("NFTmarketplace deployed to:", NFTmarketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
