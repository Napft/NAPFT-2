import React from "react";
import "../../css/featured.css";
import image1 from "../../assets/nft home/featurednft.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FeaturedNfts = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const featuredNfts = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image1,
    },
    {
      id: 3,
      image: image1,
    },
    {
      id: 4,
      image: image1,
    }
  ];

  return (
    <div className="featuredNftsDiv" data-aos="fade-up">
      <p>Featured collection</p>
      <div className="allCards">
        {featuredNfts.map((nft) => (
          <Link key={nft.id} to="/marketplace">
            <div className="cardsSection">
              <img src={nft.image} />
              <p>Digital artwork</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNfts;
