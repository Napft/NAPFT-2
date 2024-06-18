import { useState , useEffect } from "react";
import OwnedNFT from "../components/OwnedNFT"
import Axios from "axios";
import { useNFTMarketplace } from "../context/NFTMarketplaceContext";

const Owned = () => {
  const { connectedAccount, connectWallet } = useNFTMarketplace()
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(`${import.meta.env.VITE_HOST}/api/v1/nft/All_NFTs`);
        if (res.status !== 200) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        setNfts(res.data.nfts);
      } catch (err) {
        setError(`Failed to fetch NFTs: ${err.message}`);
        console.error('Error fetching NFTs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-slate-300 font-light">Loading NFTs...</p>;
  }

  if (error) {
    return <p className="text-red-500 font-light">{error}</p>;
  }

 console.log(nfts)

  return (
    <div className=" min-h-screen bg-black pt-[110px] pb-[80px] text-center">
      <h1 className="text-3xl font-semibold text-white pb-3">Owned NFTs</h1>
      <div className="flex items-center flex-wrap gap-5 w-[90%] mx-auto justify-center xl:justify-start">
     {
      nfts.map((x , index) => {
        return(
          <OwnedNFT key={index} nft={x} own = {connectedAccount}/>
        )
      })
     }</div>
      
    </div>
  )
}

export default Owned
