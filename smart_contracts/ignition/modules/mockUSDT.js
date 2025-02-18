const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MockUSDTModule", (m) => {
  const mockUSDT = m.contract("MockUSDT", []);

  console.log(`MockUSDT deployed to: ${mockUSDT.address}`);

  return { mockUSDT };
});