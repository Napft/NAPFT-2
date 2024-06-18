import * as React from "react";
import "../../css/homeAbout.css";
import about from "../../assets/nft home/about2.jpeg";
import about1 from "../../assets/nft home/about.jpeg";
import about2 from "../../assets/nft home/Designer.jpeg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeAboutus = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="AboutusDiv" data-aos="fade-up">
      <div className="pictures">
        <div className="backShade" />
        <img src={about} className="aboutImg1" />
        <img src={about1} className="aboutImg2" />
        <img src={about2} className="aboutImg3" />
      </div>
      <div className="aboutSection">
        <Link to="/aboutus">
          <button className="aboutBtn">About us</button>
        </Link>
        <p className="header">Asset based utility</p>
        <p className="sub">
          An asset-based utility designed to hold the value of NFTs during
          market downturns functions as a stabilizing mechanism in the volatile
          digital asset space. By pegging NFTs to tangible or resilient assets,
          it mitigates the impact of market fluctuations.
        </p>
        <p className="sub">
          This utility ensures that the inherent value of NFTs is preserved,
          providing a safety net for investors. It leverages asset-backed
          tokens, creating a secure and reliable investment option. This system
          promotes confidence and sustainability in the NFT market.
        </p>
      </div>
    </div>
  );
};

export default HomeAboutus;
