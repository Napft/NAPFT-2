import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import {
  setGlobalState,
  getGlobalState,
} from '../store';
import {
  CONTRACT_ADDRESS,
  ALCHEMY_API_KEY,
  NFTMarketplaceABI
} from '../context/constants';

const NFTMarketplaceContext = createContext();

export const useNFTMarketplace = () => {
  return useContext(NFTMarketplaceContext);
};

export const NFTMarketplaceProvider = ({ children }) => {
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState('');

  const getAlchemyProvider = async () => {
    try {
      const alchemyProvider = new ethers.providers.AlchemyProvider('mumbai', ALCHEMY_API_KEY);
      setProvider(alchemyProvider);
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  const getAlchemyContract = async () => {
    try {
      const alchemyProvider = await getAlchemyProvider();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, NFTMarketplaceABI, alchemyProvider);
      setContract(contract);
      console.log(contract);
    } catch (error) {
      console.error(error);
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
  
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      });
  
      window.ethereum.on('accountsChanged', async () => {
        setConnectedAccount(accounts[0]);
        await isWalletConnected();
      });
  
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      } else {
        alert('Please connect wallet.');
        console.log('No accounts found.');
      }
    } catch (error) {
      console.error(error);
      reportError(error);
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
  
      const nfts = await contract.getAllNFTs().call();
      const transactions = await contract.getAllTransactions().call();
      setGlobalState('nfts', structuredNfts(nfts));
      setGlobalState('transactions', structuredNfts(transactions));
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  const updateNFT = async ({ id, cost }) => {
    try {
      const signer = provider.getSigner();
      const updatedContract = contract.connect(signer);
      const tx = await updatedContract.changePrice(Number(id), ethers.utils.parseEther(cost.toString()));
      await tx.wait();
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  const mintNFT2 = async ({ price, IpfsHash, title = "My NFT title", description = "Some Description...." }) => {
    if (connectedAccount) {
      try {
      const signer = provider.getSigner();
      const newContract = contract.connect(signer);
      const tx = await newContract.createToken(IpfsHash, ethers.utils.parseEther(`${price}`));
      const rc = await tx.wait();
      const event = rc.events.find(event => event.event === 'Transfer');
      const [from, to, value] = event.args;
      console.log(from, to, value);

      const new_nft = {
        IPFS_hash: IpfsHash,
        NFT_token_ID: parseInt(value["_hex"], 16),
        title: title,
        price: price,
        description: description,
      };

      console.log("New NFT:", new_nft);
      const online_url = "https://napft-backend.vercel.app/api/nft/";
      axios.post(online_url, new_nft).then((response) => {
        console.log("Success", response);
      }).catch((error) => {
        console.error("Error", error);
      });

      return value;
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  }
else{
  console.log("Please connect wallet");
}
};

  const buyNFT = async (tokenId) => {
    try {
      const getPrice = await contract.GetNftPrice(tokenId).call();
      const price = ethers.utils.parseEther(`${getPrice}`);
      const signer = provider.getSigner();
      const tx = await contract.connect(signer).buy(tokenId, { value: price });
      console.log(tx);
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  const signMessage = async (message, account) => {
    try {
      const signature = await provider.getSigner().signMessage(message);
      return signature;
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

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
  }, []);

  return (
    <NFTMarketplaceContext.Provider
      value={{
        connectedAccount,
        getAllNFTs,
        connectWallet,
        mintNFT2,
        buyNFT,
        updateNFT,
        isWalletConnected,
        authenticate
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

export default NFTMarketplaceContext;
