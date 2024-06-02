
import nft from '../assets/nft-1.jpeg'
import { Link } from "react-router-dom"; 
import {motion} from 'framer-motion';
import { id } from 'ethers';

const SingleNFTcard = ({img , Id , price , royalty}) => {
  return (
  
  
   <Link to='/nftdetails'><motion.div whileHover={{y:10}} transition={{type:"spring", bounce:0.8}}  className="text-left w-80 overflow-hidden cursor-pointer shadow-md shadow-blue-400 rounded-xl" >
      <div className="w-full h-72 overflow-hidden">
      <img src={img} alt={`ID ${id}`} className="w-full hover:scale-110 h-[100%] ease-in-out duration-500"/>
      </div>
      
      <div className="p-3 flex flex-col gap-3">
      
      {/* <p className="text-white text-lg">Id: {Id}</p> */}
      <p className="text-slate-200 font-semibold">{price} MATIC</p>
      <p className="text-slate-200 font-semibold">Royalty: {royalty} %</p>
      </div>
      
      <button className="bg-slate-800 w-full py-2 text-white text-lg hover:bg-slate-900">Buy</button>
     </motion.div></Link>  
  
  )
}

export default SingleNFTcard
