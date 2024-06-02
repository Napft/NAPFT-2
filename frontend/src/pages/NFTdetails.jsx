
import nft from '../assets/nft-2.jpeg'
import { FaRegHeart } from "react-icons/fa";
import chainlogo from '../assets/polygon.png'
import { useState,useEffect } from 'react';
import { SlGraph } from "react-icons/sl";
import { motion } from 'framer-motion';
import { useNFTMarketplace } from '../context/NFTMarketplaceContext';
import { useLocation } from 'react-router-dom';

const NFTdetails = () => {
  let[like , uplike] = useState(1)
  const location = useLocation();
  const {  img, price, royalty } = location.state || {}; 

  useEffect(() => {
    window.scrollTo(0,0);
    
  }, []);
  


  return (
    <>
    <div className=' pt-[120px] lg:pt-[100px] pb-[70px]  flex flex-col xl:flex-row justify-center gap-3 px-4 '>

      <motion.div animate={{rotateY:[0,200,200,0]}} transition={{type:"tween" , duration:2}} className='max-w-fit rounded-xl border border-slate-300 overflow-hidden mx-auto xl:mx-0 cursor-pointer '  id="nftdv">

        <div className='flex justify-between items-center px-2 py-2'>
          <div className='chain w-8 h-8 rounded-full overflow-hidden'>
             <img src={chainlogo} className=' bg-white' alt="" />
          </div>
           <div className='flex gap-2 items-center'>
           <p className='text-white'>{like}</p>
           <FaRegHeart className='text-white cursor-pointer' onClick={()=>uplike(like+1)} />
           
           </div>
          
        </div>

        <div className='overflow-hidden'><img src={img} className='w-auto h-auto lg:w-[40rem] lg:h-[40rem]'/></div>
      </motion.div>

      <div className='xl:w-[60%] flex flex-col gap-4 px-3'>
        <p className='text-blue-300 text-lg'>Collection</p>
        <h1 className='text-white text-4xl font-bold'>NFT-2</h1>
        <p className='text-slate-200'>something about this nft</p>

        <div className='border-2 border-slate-400 rounded-lg mt-4 p-4 flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
          <p className='text-slate-200 text-md'>Current Price :</p>
          <h2 className='text-white text-2xl'>{price} MATIC</h2>
          </div>

          <div  className='flex gap-2 items-center'>
          <p className='text-slate-200 text-md'>Royalty :</p>
          <h2 className='text-white text-2xl'>{royalty} %</h2>
          </div>
         
          <button className='bg-blue-500 text-white py-3 w-full xl:w-[40%] rounded-lg'>BUY</button>
        </div>

        <div className='border-2 border-slate-400 rounded-lg p-4  flex gap-2 items-center'>
          <SlGraph className='text-xl text-white'/>
          <h2 className='text-xl text-white'>Buying History</h2>
        </div>

      </div>
    </div>
    
    
    </>
  )
}

export default NFTdetails
