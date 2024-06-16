import { Link } from "react-router-dom"; 
import { motion } from 'framer-motion';
import polygon from '../assets/polygon.png'; // Assuming you have this asset

const SingleNFTcard = ({ nft }) => {
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

  const queryParams = new URLSearchParams({ IPFS_hash, latestPrice });

  return (
    <Link to={`/details?${queryParams.toString()}`}>
      <motion.div 
        whileHover={{ y: 10 }} 
        transition={{ type: "spring", bounce: 0.8 }} 
        className="text-left w-80 overflow-hidden cursor-pointer shadow-md shadow-blue-400 rounded-xl"
      >
        <div className="w-full h-72 overflow-hidden">
          <img 
            src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${IPFS_hash}`} 
            alt={`ID ${NFT_token_ID}`} 
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = polygon; // fallback to a placeholder image
            }} 
            className="w-full hover:scale-110 h-[100%] ease-in-out duration-500"
          />
        </div>
        <div className="p-3 flex flex-col gap-3">
          <p className="text-slate-200 font-semibold">{latestPrice} MATIC</p>
          <p className="text-slate-200 font-semibold">- %</p>
        </div>
        <button className="bg-slate-800 w-full py-2 text-white text-lg hover:bg-slate-900">Buy</button>
      </motion.div>
    </Link>
  );
}

export default SingleNFTcard;
