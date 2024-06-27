import Axios from 'axios';
import SingleNFTcard from './SingleNFTcard';
import { useEffect, useState } from 'react';

function Cards() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `${import.meta.env.VITE_HOST}/api/v1/nft/All_NFTs`
        );
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

  return (
    <>
      <h2 className="text-white text-3xl mt-5 font-semibold">Our Collections</h2>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-8 w-[90%] mx-auto">
        {nfts.length === 0 ? (
          <p className="text-slate-300 font-light">No NFTs available</p>
        ) : (
          nfts.reverse().map((nft, index) => <SingleNFTcard key={index} nft={nft} />)
        )}
      </div>
    </>
  );
}

export default Cards;
