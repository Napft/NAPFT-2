const hre = require("hardhat");

async function main() {

  const NftContract = await hre.ethers.getContractFactory("NFTmarketplace");
  console.log("deploying nft smart contract");
  const NFT = await NftContract.deploy();
  console.log("NFT deployed to:", NFT.address);


  console.log(
    `compile nft smart contract with address ${NFT.target}`
  );

  // console.log("abi of contract", NFT.abi);
}

main()