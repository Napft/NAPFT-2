require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv/config");
// const {vars} = require("hardhat/config");
// const { version } = require("os");
// const oklinkkey = vars.get("Oklink_API_KEY")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
        version: "0.8.27",
        settings: {
          optimizer:{
            enabled: true,
            runs: 200,
          }
        }
      },
  networks:{
    hardhat: {},
    polygonAmoy:{
      url : process.env.ALCHEMY_URL,
      accounts : [process.env.ACCOUNT
    ]
    },
    polygon:{
      url : process.env.ALCHEMY_URL,
      accounts : [process.env.ACCOUNT]
    },
    skale:{
      url : process.env.SKALE_URL,
      accounts : [process.env.ACCOUNT]
    },
    calypso: {
      url: process.env.SKALE_URL, // RPC URL for Calypso Hub testnet
      chainId: 974399131, // Chain ID
      accounts: [process.env.ACCOUNT], // Replace with your wallet private key
    },
  },
  ignition: {
    default: {
      module: require('./ignition/modules/mockUSDT'),
    },
  },
  etherscan:{
    apiKey : {
      // process.env.ETHERSCAN_API_KEY,
      'skale' : 'doesnotmatter'
    },
    customChains:[
      {
        network: "skale",
        chainId: 974399131,
        urls: {
          apiURL: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com/api", // API URL for verification
          browserURL: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com/", // Explorer for viewing contracts
        },
      },
    ]
  },
  sourcify: {
    enabled: false,
  }
};
