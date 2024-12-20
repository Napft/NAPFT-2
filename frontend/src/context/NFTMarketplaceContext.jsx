/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { toast } from "react-hot-toast";
// import {useNavigate } from 'react-router-dom'
import axios from "axios";
import PropTypes from 'prop-types';
import {
  getGlobalState,
} from '../store';
import {
  contractAddress,
  abi
} from './secret';

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
  const [myNfts, setMyNfts] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [connectedWalletId, setConnectedWalletId] = useState("");
  // const navigate = useNavigate();
  const getAlchemyProvider = async () => {
    try {
      const alchemyProvider =  new ethers.AlchemyProvider(137, import.meta.env.VITE_ALCHEMY_API_KEY);
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
        if (/Mobi|Android|Tablet|iPad|iPhone/i.test(navigator.userAgent)) {
          toast("Open MetaMask", {duration:   2000});
          // Optionally, you can redirect to MetaMask app link if MetaMask mobile supports deep linking
          window.location.href = "https://metamask.app.link/dapp/napft.com";
          return;
        } else{
          toast.error("Please install Metamask extension in your browser")
          throw new Error('Please install MetaMask');
        }
      }
   
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setConnectedAccount(accounts[0]);
      setConnectedWalletId(accounts[0]);
      const browserProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(browserProvider);
        const signerInstance = browserProvider.getSigner();
        setSigner(signerInstance);
        console.log(signerInstance);
        const contractWithSigner = new ethers.Contract(contractAddress, abi, signerInstance);
      setContract(contractWithSigner);
      toast.success("Wallet Connection Successfull");
      getAllNFTs();
    } catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  const isWalletConnected = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        console.log(connectedAccount)
        const browserProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(browserProvider);
        const signerInstance = browserProvider.getSigner();
        setSigner(signerInstance);
        const contractWithSigner = new ethers.Contract(contractAddress, abi, signerInstance);
      setContract(contractWithSigner);
      console.log(contractWithSigner);
      // getAllNFTs();
      } else {
        // toast.error("Please connect wallet")
        console.log('No accounts found.');
      }

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
  
      window.ethereum.on('accountsChanged', async () => {
        if (accounts.length) {
          setConnectedAccount(accounts[0]);
          const browserProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(browserProvider);
        const signerInstance = browserProvider.getSigner();
        setSigner(signerInstance);
        console.log(signerInstance);
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
      for (let i = tokenCount; i >= 1; i--) {
        const tokenURI = await contract.tokenURI(i);
        const price = await contract.GetNftPrice(i);
        const royalty = await contract.getRoyalityFee(i);
        nftsArray.push({ 
          id: i, 
          ipfsHash: tokenURI, 
          price: ethers.formatEther(`${price}`), 
          royalty: royalty.toString(), 
        });
    }
    setNfts(nftsArray);
    console.log("nftsArray :", nftsArray);
    // return nftsArray;
    }} catch (error) {
      console.error(error);
      reportError(error);
    }
  };

  const getNFTDetails = async (tokenId) => {
    try{
      if(contract){
        const nft = await contract.GetNFTDetails(tokenId);
        const creator = nft.creator;
        const owner = nft.owner;
        const price = nft.price;
        const ipfsHash = nft.IpfsHash;
        console.log("creator: ", creator, "owner: ", owner, "price: ", price.toString(), "ipfsHash: ", ipfsHash)
      } 
    }
  catch(error){
    console.error(error);
  }
};

    const getTransactionHistory = async (tokenId) => {
      try{
        const transactions = await contract.GetTransactionHistory(tokenId);
        return transactions;
      }
      catch(error){
        console.error(error); 
      }
    }

    const myNFTs = async (provider) => {
        try{
          if(contract){
            const tokenCount = await contract.GetCurrentToken();
            console.log(tokenCount);
      const myNfts = []
      for (let i = 1; i <= tokenCount; i++) {
        const nfts = await contract.GetNFTDetails(i);
        if(nfts.owner == provider){
          const price = nfts.price;
          const ipfsHash = nfts.IpfsHash;
          console.log("price : ", price, "ipfsHash : ", ipfsHash)
        
        myNfts.push({ 
          id: i, 
          ipfsHash: ipfsHash, 
          price: ethers.formatEther(`${price}`),
        });
        setMyNfts(myNfts)
          }}}}
        catch(error){
          console.log(error)
        }
    }
  
  

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
      const newContract = contract.connect(signer);
      const tx = await newContract.creatToken(IpfsHash, ethers.utils.parseEther(`${price}`), royalityfee);
      const rc = await tx.wait();
      console.log(rc)
      console.log(rc.logs[0].args[2].toString())
      const tokenId = rc.logs[0].args[2].toString()
      //token Id 
      console.log("Minted NFT Token ID:", tokenId);
      const nft = await contract.GetNFTDetails(tokenId);
        const creator = nft.creator;
        const owner = nft.owner;

      const new_nft = {
        IPFS_hash: IpfsHash,
        NFT_token_ID: tokenId,
        title: title,
        price: price,
        royalityfee: royalityfee,
        description: description,
        creator: creator,
        owner: owner,
      };
        toast.success("NFT minted successfully");
        console.log(new_nft);
        console.log(import.meta.env.VITE_HOST);
      axios
        .post(`${import.meta.env.VITE_HOST}/api/v1/nft/new_nft`, new_nft)
        .then((response) => {
          console.log("Success", response);
          toast.success("nft stored in the database..");
        })
        .catch((error) => {
          console.error("Error", error);
        });

      return new_nft;
    } catch (error) {
      reportError(error);
      toast.error("Error minting NFT");
    }
  }
else{
  console.log("Please connect wallet");
  toast.success("please download Metamask extension in your browser");
}
};

  const buyNFT = async (tokenId) => {

    if (connectedAccount) {
      // alert(connectedAccount);
      try {
      console.log(contract);
      console.log(signer);
      const newContract = await contract.connect(signer);
      const price = await contract.GetNftPrice(tokenId);
      console.log(price.toString());
      const tx = await newContract.buy(tokenId, { value: price });
      console.log(tx);
      toast.success("You bought NFT");
      // navigate("/thankyou");
      // Redirect to the Thankyou page
      window.location.href = '/thankyou';
    } catch (error) {
      console.error(error);
      if (error.code === -32603 || error.data?.code === -32000) {
        toast.error(`Transaction failed\nInsufficient Balance`);
      }
      
      if(error.reason == "execution reverted: You can't buy your own NFT"){
        console.error('Gas estimation failed: ', error.error.data?.message);
        toast.error(`You can't buy your own NFT`);
      }
    }
  } else{
    toast.error("Please connect wallet");
    console.log("Please connect wallet");
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

  // const authenticate = async () => {
  //   try {
  //     let account = getGlobalState("connectedAccount");
  //     if (account !== "") {
  //       const message = "Hello, from your NFT Marketplace";
  //       const signature = await signMessage(message, account);
  //       console.log(signature);
  //       // Implement logic to verify signature on backend (if applicable)
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     reportError(error);
  //   }
  // };

  useEffect(() => {
    // getAlchemyContract();
    // isWalletConnected();

  });

  return (
    <NFTMarketplaceContext.Provider
      value={{
        provider,
        signer,
        contract,
        connectedAccount,
        nfts,
        myNfts,
        getAllNFTs,
        getNFTDetails,
        getTransactionHistory,
        connectWallet,
        mintNFT2,
        buyNFT,
        // updateNFT,
        isWalletConnected,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

NFTMarketplaceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NFTMarketplaceContext;
