import  { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';


const MarketPlace = () => {
  const swiperRef = useRef(null);
  

  return (
    <div className='text-center pt-8 pb-[80px]'>
    
     <h1 className='text-white text-5xl font-semibold'>Our featured NFTs</h1>

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
    
    className='p-4 h-[60vh] w-[50%] my-5 rounded-2xl border-2 border-blue-500'
    id='swiper2'
    >
      <SwiperSlide>
        <div
          className="rec1 h-full relative  flex flex-col justify-center items-center text-white "
        > <Link to='/nftdetails'></Link>
          {/* <div className="absolute inset-0 bg-black opacity-60"></div>
          <h2 className="text-4xl mb-4 z-10">first nft</h2>
          <p className="text-lg lg:text-xl mb-6 z-10 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nam, qui maxime fuga totam.</p>
          
          <button className="bg-blue-500 hover:bg-blue-700 z-10 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>*/}</div> 
       
      </SwiperSlide>

      <SwiperSlide>
        <div
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
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="rec3 h-full relative  flex flex-col justify-center items-center text-white">
            
          
        </div>
      </SwiperSlide>
     
    </Swiper>

    <Cards/>
    </div>
  );
};

export default MarketPlace;