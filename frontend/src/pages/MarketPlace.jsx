import  { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useNFTMarketplace } from '../context/NFTMarketplaceContext';

const MarketPlace = () => {
  const swiperRef = useRef(null);
  const { getAllNFTs } = useNFTMarketplace();
  useEffect(() => {
    window.scrollTo(0,0);
    // getAllNFTs();
  }, []);

  return (
    <div  className='text-center pt-[110px] pb-[80px] px-2'>
    
     <motion.h1 animate={{y:0}} initial={{y:-120}} transition={{type:"spring", bounce:0.5}} className='text-white text-5xl py-3 font-semibold'>Our featured NFTs</motion.h1>

    <Swiper
    
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    
    className='p-4 h-[60vh] w-full xl:w-[50%] my-5 rounded-2xl border-2 border-blue-500'
    id='swiper2'
    >
      <SwiperSlide>
      <Link to='/nftdetails'><motion.div animate={{scale:1}} initial={{scale:0}} transition={{type:"tween", duration:0.5}}
          className="rec1 h-full relative  flex flex-col justify-center items-center text-white "
        > 
          {/* <div className="absolute inset-0 bg-black opacity-60"></div>
          <h2 className="text-4xl mb-4 z-10">first nft</h2>
          <p className="text-lg lg:text-xl mb-6 z-10 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nam, qui maxime fuga totam.</p>
          
          <button className="bg-blue-500 hover:bg-blue-700 z-10 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>*/}</motion.div> </Link>
       
      </SwiperSlide>

      <SwiperSlide>

         <Link to='/nftdetails'><motion.div animate={{scale:1}} initial={{scale:0}}
          className="rec2 h-full relative  flex flex-col justify-center items-center text-white"
          
        > <Link to='/nftdetails'></Link>
          {/* <div className="absolute inset-0 bg-black opacity-60"></div>
          <h2 className="text-4xl mb-4 z-10">second nft</h2>
          <p className="text-xl mb-6 z-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem impedit optio accusantium!</p>
          <button
          
            className="bg-blue-500 hover:bg-blue-700 text-white z-10 font-bold py-2 px-4 rounded"
          >
            Buy
          </button> */}
        </motion.div></Link>

      </SwiperSlide>

      <SwiperSlide>
      <Link to='/nftdetails'>
        <motion.div animate={{scale:1}} initial={{scale:0}}
          className="rec3 h-full relative  flex flex-col justify-center items-center text-white">
            
          
        </motion.div>
        </Link>
      </SwiperSlide>
     
    </Swiper>

    <Cards/>
    </div>
  );
};

export default MarketPlace;