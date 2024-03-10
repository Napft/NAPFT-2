require("@nomicfoundation/hardhat-toolbox");

const { alchemyApiKey, mnemonic } = require("./scripts/secrets.json");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    mumbai: {
      url: `https://polygon-mumbai--rpc.datahub.figment.io/apikey/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic }
    }
  },
  solidity: "0.8.24",
};
