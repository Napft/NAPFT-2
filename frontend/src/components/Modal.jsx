import logo from '../assets/logo.png'  
import ms from '../assets/metamask.svg' 
import trust from '../assets/trust-wallet-token.svg' 
import cb from '../assets/coinbase.svg' 
import { RxCross2 } from "react-icons/rx";                
import { useNFTMarketplace } from "../context/NFTMarketplaceContext";
import toast from 'react-hot-toast';

const Modal = ({close}) => {
  const { connectedAccount, connectWallet } = useNFTMarketplace();

  return (
    <>
    <div className='wrapper' onClick={close}></div>
    <div className="bg-white flex flex-col items-center gap-5 px-5 pt-3 pb-8  rounded-lg w-[300px] md:w-[480px]
    " id='container'>
      <div className=' w-full'>
      <RxCross2 className='text-xl ml-auto'onClick={close}/>
      </div>
      <div id="img" className="w-28 h-28 rounded-full bg-black p-2">
         <img src={logo} alt="" />
      </div>
      <h2 className='text-2xl font-semibold'>Connect to NapFT</h2>

      <div className='w-full rounded-md' id='wallets'>
        <div onClick={(connectWallet)} className='flex gap-4 items-center w-full p-3 cursor-pointer'>
          <img src={ms} alt="" className='w-10 h-10' />
          <h1 className='text-lg font-semibold'>MetaMask</h1>
        </div>
        <div className='flex gap-4 items-center w-full p-3 cursor-pointer' id='trust'>
        <img src={trust} alt="" className='w-10 h-10'/>
        <h1 className='text-lg font-semibold'>Trust</h1>
        </div>
        <div className='flex gap-4 items-center w-full p-3 cursor-pointer'>
        <img src={cb} alt="" className='w-10 h-10'/>
        <h1 className='text-lg font-semibold'>CoinBase</h1>
        </div>
      </div>
    </div>
    {
      
    }
    </>
  )
}

export default Modal
