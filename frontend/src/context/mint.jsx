import { prepareContractCall } from "thirdweb"
import { useSendTransaction } from "thirdweb/react";
import { contract } from "./contract";
export default function Mint() {
  const { mutate: sendTransaction } = useSendTransaction();

  const onClick = () => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "function creatToken(string tokenURI, uint256 price, uint8 royalityfee) returns (uint256)", 
      params: [tokenURI, price, royalityfee] 
    });
    sendTransaction(transaction);
  }
}