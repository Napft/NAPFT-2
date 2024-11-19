import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

export const client = createThirdwebClient({ 
  clientId: "YOUR_CLIENT_ID" 
});
export const contract = getContract({
  client,
	chain: defineChain(137),
  address: "0x7215Bc072FA9cD56a4eAE856A977A6Ec3d6e6e78"
});
