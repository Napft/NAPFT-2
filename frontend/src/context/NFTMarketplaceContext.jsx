import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { toast } from "react-hot-toast";
import {
  setGlobalState,
  getGlobalState,
} from '../store';
import {
  contractAddress,
  abi
} from '../context/secret';

const NFTMarketplaceContext = createContext();

export const useNFTMarketplace = () => {
  return useContext(NFTMarketplaceContext);
};

export const NFTMarketplaceProvider = ({ children }) => {
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null)
  const [connectedAccount, setConnectedAccount] = useState('');
  const [nfts, setNfts] = useState([]);
  const [connectedWalletId, setConnectedWalletId] = useState("");

  const getAlchemyProvider = async () => {
    try {
      const alchemyProvider =  new ethers.AlchemyProvider(80002, import.meta.env.VITE_ALCHEMY_API_KEY);
      console.log(alchemyProvider);
      setProvider(alchemyProvider);
      return alchemyProvider;
    } catch (error) {
      console.log("Failed to load provider")
      reportError(error);
    }
  };

  const getAlchemyContract = async () => {
    try {
      const alchemyProvider = await getAlchemyProvider();
      const contract = new ethers.Contract(contractAddress, abi, alchemyProvider);
      setContract(contract);
      console.log(contract);
    } catch (error) {
      reportError(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('Please install MetaMask');
      }
  
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setConnectedAccount(accounts[0]);
      setConnectedWalletId(accounts[0]);
      toast.success("Wallet Connection is Successfull.....");
      const browserProvider = new ethers.BrowserProvider(window.ethereum);
        setProvider(browserProvider);
        const signerInstance = await browserProvider.getSigner();
        setSigner(signerInstance);
        const contractWithSigner = new ethers.Contract(contractAddress, abi, signerInstance);
      setContract(contractWithSigner);
      getAllNFTs();
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  const isWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('Please install MetaMask');
      }
  
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        console.log(connectedAccount)
        const browserProvider = new ethers.BrowserProvider(window.ethereum);
        setProvider(browserProvider);
        const signerInstance = await browserProvider.getSigner();
        setSigner(signerInstance);
        const contractWithSigner = new ethers.Contract(contractAddress, abi, signerInstance);
      setContract(contractWithSigner);
      console.log(contractWithSigner);
      } else {
        alert('Please connect wallet.');
        console.log('No accounts found.');
      }

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
  
      window.ethereum.on('accountsChanged', async () => {
        if (accounts.length) {
          setConnectedAccount(accounts[0]);
          const browserProvider = new ethers.BrowserProvider(window.ethereum);
        setProvider(browserProvider);
        const signerInstance = await browserProvider.getSigner();
        setSigner(signerInstance);
        const contractWithSigner = new ethers.Contract(contractAddress, abi, signerInstance);
      setContract(contractWithSigner);
      console.log(contractWithSigner);
          } else {
            setConnectedAccount('');
            setSigner(null);
          }
      });
    }
    catch(error){
      console.log('Failed to check wallet connection:', error)
    }
  };

  const structuredNfts = (nfts) => {
    console.log(nfts);
    return nfts.map((nft) => ({
      id: Number(nft.id),
      owner: nft.owner.toLowerCase(),
      cost: ethers.utils.formatEther(nft.cost),
      title: nft.title,
      description: nft.description,
      metadataURI: nft.metadataURI,
      timestamp: nft.timestamp,
    })).reverse();
  };

  const getAllNFTs = async () => {
    try {
      // if (!window.ethereum) {
      //   throw new Error('Please install MetaMask');
      // }
  
      // const nfts = await contract.getAllNFTs().call();
      // const transactions = await contract.getAllTransactions().call();
      // setGlobalState('nfts', structuredNfts(nfts));
      // setGlobalState('transactions', structuredNfts(transactions));
      if(contract){
      const tokenCount = await contract.GetCurrentToken();
      console.log(tokenCount);
      const nftsArray = [];
      for (let i = 1; i <= tokenCount; i++) {
        const tokenURI = await contract.tokenURI(i);
        const price = await contract.priceOfNFT(i);
        const royalty = await contract.RoyalityFees(i);
        nftsArray.push({ id: i, tokenURI, price: ethers.utils.formatEther(price), royalty });
    }
    setNfts(nftsArray);
    console.log("nftsArray :", nftsArray);
    // return nftsArray;
    }} catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  // const updateNFT = async ({ id, cost }) => {
  //   try {
  //     console.log(signer);
  //     console.log(contract);
  //     const updatedContract = contract.connect(signer);
  //     const tx = await updatedContract.changePrice(Number(id), ethers.parseEther(cost.toString()));
  //     await tx.wait();
  //   } catch (error) {
  //     console.error(error);
  //     reportError(error);
  //   }
  // };

  // const mintEventAbi = [
  //   "event Mint(address indexed creator, uint256 indexed tokenId, string indexed tokenURI)"
  // ];
  const mintNFT2 = async ({ IpfsHash, price, royalityfee, title = "My NFT title", description = "Some Description...." }) => {
    if (connectedAccount) {
      try {
      // console.log(signer)
      // console.log(contract)
      const newContract = contract.connect(signer);
      const tx = await newContract.creatToken(IpfsHash, ethers.parseEther(`${price}`), royalityfee);
      const rc = await tx.wait();
      console.log(rc)
      // Decode the Mint event
      // const iface = new ethers.utils.Interface(mintEventAbi);
      // const log = rc.logs.find(log => log.address === contractAddress && log.topics[0] === ethers.utils.id("Mint(address,uint256,string)"));
      // const event = iface.parseLog(log);
      // const tokenId = event.args.tokenId;

      // console.log("Minted NFT Token ID:", tokenId);
      const new_nft = {
        IPFS_hash: IpfsHash,
        // NFT_token_ID: parseInt(hash["_hex"], 16),
        title: title,
        price: price,
        royalityfee: royalityfee,
        description: description,
      };

      toast.success("NFT minted successfully.....");
      // axios.post(online_url, new_nft).then((response) => {
      //   console.log("Success", response);
      // }).catch((error) => {
      //   console.error("Error", error);
      // });

      return new_nft;
    } catch (error) {
      reportError(error);
    }
  }
else{
  console.log("Please connect wallet");
  toast.success("please download Metamask extension in your browser");
}
};

  const buyNFT = async (tokenId) => {
    try {
      const getPrice = await contract.GetNftPrice(tokenId).call();
      const price = ethers.parseEther(`${getPrice}`);
      const signer = provider.getSigner();
      const tx = await contract.connect(signer).buy(tokenId, { value: price });
      console.log(tx);
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  // const signMessage = async (message, account) => {
  //   try {
  //     const signature = await provider.getSigner().signMessage(message);
  //     return signature;
  //   } catch (error) {
  //     console.error(error);
  //     reportError(error);
  //   }
  // };

  const authenticate = async () => {
    try {
      let account = getGlobalState("connectedAccount");
      if (account !== "") {
        const message = "Hello, from your NFT Marketplace";
        const signature = await signMessage(message, account);
        console.log(signature);
        // Implement logic to verify signature on backend (if applicable)
      }
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  useEffect(() => {
    getAlchemyContract();
    // isWalletConnected();

  }, []);

  return (
    <NFTMarketplaceContext.Provider
      value={{
        provider,
        signer,
        contract,
        connectedAccount,
        nfts,
        getAllNFTs,
        connectWallet,
        mintNFT2,
        buyNFT,
        // updateNFT,
        isWalletConnected,
        authenticate,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

export default NFTMarketplaceContext;
