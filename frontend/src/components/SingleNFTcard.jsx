import { Link } from "react-router-dom"; 
import {motion} from 'framer-motion';
import polygon from '../assets/polygon.png'
import Details from "../pages/Details";

const SingleNFTcard = ({cid , Id , price , royalty}) => {
  const queryParams = new URLSearchParams({ cid, price, Id, royalty });

  return (
    <>
  {/* <Details className="hidden" cid = {cid} Id = {Id} price = {price} royalty = {royalty}/> */}
    <Link to={`/details?${queryParams.toString()}`}>
    <motion.div whileHover={{y:10}} transition={{type:"spring", bounce:0.8}}  className="text-left w-80 overflow-hidden cursor-pointer shadow-md shadow-blue-400 rounded-xl" >
      <div className="w-full h-72 overflow-hidden">
      <img src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${cid}`} alt={`ID ${Id}`} onError={(e) => console.error("Image load error", e)} className="w-full hover:scale-110 h-[100%] ease-in-out duration-500"
      />
      </div>
      
      <div className="p-3 flex flex-col gap-3">
      
      {/* <p className="text-white text-lg">Id: {Id}</p> */}
      <p className="text-slate-200 font-semibold">{price} MATIC </p>
      <p className="text-slate-200 font-semibold">{royalty}%</p>
      </div>
      
      <button className="bg-slate-800 w-full py-2 text-white text-lg hover:bg-slate-900">Buy</button>
     </motion.div>
     </Link>
     </>
  )
}

export default SingleNFTcard
