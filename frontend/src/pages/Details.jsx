import "../css/details.css";
import nft from "../assets/nft-3.jpeg";
import { FaShare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { RiNftFill } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { FaCircleExclamation } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNFTMarketplace } from "../context/NFTMarketplaceContext";
import SingleNFTcard from "../components/SingleNFTcard";
import Axios from "axios";
import Loader from "../components/Loader";

const Details = () => {
  const [nfts, setNfts] = useState([]);
  const [showowner , setshowowner] = useState(false);
  const [showLoader , setshowloader] = useState(false);

  const collections = [...Array(8)];
  
  // const hasCollections = collections.length > 0;

  const {buyNFT} = useNFTMarketplace();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cid = queryParams.get('IPFS_hash');
  const price = queryParams.get('latestPrice');
  const token_ID = queryParams.get('NFT_token_ID');
  const title = queryParams.get('title')
  const description = queryParams.get('description')
  const owner = queryParams.get('owner')
  
 

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      
      try {
        const res = await Axios.get('http://localhost:8800/api/v1/nft/All_NFTs');
        if (res.status !== 200) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        setNfts(res.data.nfts);
      } catch (err) {
        
        console.error(`Failed to fetch NFTs: ${err.message}`);
      } 
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="parentDiv1">
        {/* nft image */}
        <div className="imageDiv">
          <div className="elements">
            <RiNftFill />
            <div className="iconDiv">
              <FaShare className="icon" />
              <FaRegHeart className="icon" />
            </div>
          </div>
          <img src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${cid}`} />
        </div>

        {/* details */}
        <div className="nftAbout">
          <div className="userDiv">
            <p className="user">User</p>
            <p className="nftname">{title}</p>
            <p className="by">
              Owned by <span className="id cursor-pointer text-blue-500" onClick={() => setshowowner(!showowner)}>{showowner == false ? owner.substring(0,9) + '...' : owner}</span>
            </p>
          </div>

          <div className="icons">
            <p className="counts">
              <FaEye className="icon2" /> Views
            </p>

            <p className="counts">
              <FaRegHeart className="icon2" /> Favourites
            </p>

            <p className="counts">
              <FiBox className="icon2" /> Items
            </p>
          </div>
          <div className="desc">
            <div className="descHead">
              <FaCircleExclamation className="descIcon" />
              <p> {description} </p>
            </div>

            <div className="innerDesc">
              <p>This is a NFT</p>
            </div>
          </div>
          <div className="priceDiv">
            <p className="price">Current price</p>
            <p className="eth">
              {price} MATIC <span className="inDollars">$1,3322</span>
            </p>
            <div className="buttonDiv">
              <button className="buyButton" onClick={() => { buyNFT(token_ID); setshowloader(true)}} >Buy </button>
              <button className="offerButton">Make offer </button>
            </div>
          </div>
          <div className="historyDiv">
            {/* <svg > */}
            <SlGraph className="historyIcon" />
            {/* </svg> */}
            <p className="history">Buying History</p>
          </div>
        </div>
      </div>

      {/* collections */}
      <div className="collectionDiv">
        <p className="see">See collections</p>
        <div className="carouselContainer">
          <div className="carousel">
            <div className="carouselContainer">
              <div className="carousel">
                {nfts.length > 0 ? (
                  nfts.reverse().map((nft, index) => (
                    // <motion.div
                    //   key={index}
                    //   whileHover={{ y: 10 }}
                    //   transition={{ type: "spring", bounce: 0.8 }}
                    //   className="card"
                    // >
                    //   <div className="imageContainer">
                    //     <img
                    //       src={`${import.meta.env.VITE_GATEWAY_URL}/ipfs/${
                    //         nft.ipfsHash
                    //       }`}
                    //       className="cardImage"
                    //       alt={`NFT ${index}`}
                    //     />
                    //   </div>
                    //   <div className="cardDetails">
                    //     <p className="price">{nft.price} MATIC</p>
                    //     <p className="percentage">{nft.royalty}%</p>
                    //   </div>
                    //   <button className="buyBtn">Buy</button>
                    // </motion.div>

                    <SingleNFTcard key={index} nft={nft}/>
                  ))
                ) : (
                  <div className="noCollection">
                    <p className="noCol">
                      <i>No collections available.</i>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        showLoader && <Loader close = {setshowloader(false)}/>
      }
    </>
  );
};

export default Details;
