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
          <p className="text-white">No NFTs available</p>
        ) : (
                nfts.map((nft, index) => (
                    <div key={index} className="h-48 w-48 bg-red-500">
                        <img src={nft.tokenURI} alt={`NFT ${nft.id}`} />
                        <p>ID: {nft.id}</p>
                        <p>Price: {nft.price} MATIC</p>
                        <p>Royalty: {nft.royalty}%</p>
                    </div>
                )))}
            
      {/* <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/> */}
    </div>
    </>
  );
}

export default Cards;
