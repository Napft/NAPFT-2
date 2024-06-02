import SingleNFTcard from "./SingleNFTcard";
import { useNFTMarketplace } from '../context/NFTMarketplaceContext';
import { useEffect, useState } from 'react';

function Cards() {
  const { nfts } = useNFTMarketplace();

    
  return (
    <>
    <h2 className="text-white text-3xl mt-5 font-semibold ">Our Collections</h2>
    <div className="flex justify-center items-center flex-wrap gap-8 mt-8 w-[90%] mx-auto">
    {nfts.length === 0 ? (
          <p className="text-slate-300 font-light">Loading NFTs...</p>
        ) : (
                nfts.map((nft, index) => (
                    
                      <SingleNFTcard key={index} img={`${import.meta.env.VITE_GATEWAY_URL}/ipfs/${nft.ipfsHash}`} Id = {nft.id} price = {nft.price} royalty = {nft.royalty} />
                       
                    
                )))}
            
      
    </div>
    </>
  );
}

export default Cards;
