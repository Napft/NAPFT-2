
import { Link } from "react-router-dom"; 
import {motion} from 'framer-motion';
import { useNFTMarketplace } from "../context/NFTMarketplaceContext";
const OwnedNFT = ({Name , des , img , price}) => {
  const { myNfts } = useNFTMarketplace();
  
  return (
    <motion.div whileHover={{y:10}} transition={{type:"spring", bounce:0.8}}  className="text-left w-80 overflow-hidden cursor-pointer shadow-md shadow-blue-400 rounded-xl" >
      <div className="w-full h-72 overflow-hidden">
      <img src={img} className="w-full hover:scale-110 h-[100%] ease-in-out duration-500"/>
      </div>
      
      <div className="p-3 flex flex-col gap-3">
      <p className="text-white text-lg">{Name}</p>
      <p className='text-white text-md'>{des}</p>
      <p className="text-slate-200 font-semibold">Current Price : {price}</p>
      </div>
          
     </motion.div>
  )
}

export default OwnedNFT

