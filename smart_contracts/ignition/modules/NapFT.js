const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const mockUSDT = require("./mockUSDT");
module.exports = buildModule("MarketplaceModule", (m) => {

  const marketplace = m.contract("NapFT", [mockUSDT.address]);

  console.log(`NapFT deployed to: ${marketplace.address}`);

  return { marketplace};
});