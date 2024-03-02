
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  let[disp , setdisp] = useState(true)

  let NavItems = ['Home' , 'MarketPlace' , 'AboutUs' , 'PersonalPage']
  return(
  <>
    <div className="bg-black py-3">
      <div className="flex justify-between items-center w-[95%] mx-auto border-2 border-white rounded-lg py-2 px-3 " id="nav">
        <div className="logo w-24 h-16"></div>

        <div className=" items-center gap-4 hidden lg:flex">
          {NavItems.map((x,index) => (
            <Link key={index} to={x == 'Home' ? '/' : `/${x.toLowerCase()}`}><span  className="text-white hover:font-semibold cursor-pointer ease-in duration-200">{x}</span></Link>
          ))}
        </div>

        <div className="gap-2 hidden lg:flex">
        <button className="bg-gradient-to-r from-red-500 to bg-purple-500 hover:from-purple-500 to hover:bg-red-500 text-white p-3 rounded-full font-light ease-in duration-500">Connect Wallet</button>
        <button className="bg-gradient-to-r from-red-500 to bg-purple-500 hover:from-purple-500 to hover:bg-red-500 text-white p-3 rounded-full font-light ease-in duration-500">Mint your NFT</button>
        </div>

        <AiOutlineMenu className="text-white text-2xl font-bold lg:hidden" onClick={()=>{setdisp(!disp)}}/>
      </div>
    </div>


    <div className={`bg-black h-screen ${disp && 'hidden'}`}>
      <div className="flex flex-col items-start w-[93%] mx-auto py-3 gap-4" id="nav">
        

        <div className="flex flex-col  gap-5">
          {NavItems.map((x,index) => (
            <Link key={index} to={x == 'Home' ? '/' : `/${x.toLowerCase()}`}><span className="text-white hover:font-semibold cursor-pointer ease-in duration-200" onClick={()=>{setdisp(true)}}>{x}</span></Link>
          ))}
        </div>

        <div className="gap-2 flex flex-col w-full ">
        <button className="bg-gradient-to-r from-red-500 to bg-purple-500 hover:from-purple-500 to hover:bg-red-500 text-white p-3 rounded-full font-light ease-in duration-500 w-full">Connect Wallet</button>
        <button className="bg-gradient-to-r from-red-500 to bg-purple-500 hover:from-purple-500 to hover:bg-red-500 text-white p-3 rounded-full font-light ease-in duration-500 w-full">Mint your NFT</button>
        </div>

        
      </div>
    </div>

     



</>

  )
}

export default Navbar
