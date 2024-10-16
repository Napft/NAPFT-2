import { motion } from 'framer-motion';

const OwnedNFT = ({ nft , own }) => {
  const {
    section_basic_info: {
      title,
      description,
      creator,
      owner,
      media_type,
      date_created,
    },
    section_price_info: { price_timeline },
    IPFS_hash,
    NFT_token_ID,
    is_public,
  } = nft;
  
  const latestPrice = price_timeline.length ? price_timeline[price_timeline.length - 1].price : 'N/A';

  if(own.toLowerCase() !== owner.toLowerCase()){
    return(null)
  }

  return (
       <>
      <motion.div
      whileHover={{ y: 10 }}
      transition={{ type: "spring", bounce: 0.8 }}
      className="text-left w-80 overflow-hidden cursor-pointer shadow-md shadow-blue-400 rounded-xl"
    >
      <div className="w-full h-72 overflow-hidden">
        <img
          src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${IPFS_hash}`}
          alt={`NFT ${NFT_token_ID}`}
          className="w-full hover:scale-110 h-[100%] ease-in-out duration-500"
        />
      </div>

      <div className="p-3 flex flex-col gap-3">
        <p className="text-white text-lg">{title}</p>
        <p className="text-white text-md">{description}</p>
        <p className="text-slate-200 font-semibold">Current Price: {latestPrice} MATIC</p>
      </div>
    </motion.div> 
     
    </>
  );
};

export default OwnedNFT;
