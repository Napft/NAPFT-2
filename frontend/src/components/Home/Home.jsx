import "../../css/home.css";
import home from "../../assets/nft home/image.png";
import { Link } from "react-router-dom";
import FeaturedNfts from "./FeaturedNfts";
import HomeAboutus from "./HomeAboutus";
import Procedure from "./Procedure";
import Newsletter from "./Newsletter";
const Home = () => {
  return (
    <div className="parentDiv">
      <div className="homeDiv">
        <div className="textDiv">
          <p className="header2">
            Digital Arts & <span className="nfts">NFTs</span>
          </p>
          <div className="innerText">
            <p className="header1">Create, Buy and Sell</p>
            <p className="body">
              A <span className="fastFlicker">market place</span> for{" "}
              <span className="flicker">newgen </span>creators!
            </p>
            <div className="buttonDiv">
              <Link to="/marketplace">
                <button className="btn">Go to marketplace</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="imageDiv">
          <img src={home} className="homeImg" />
        </div>
      </div>
      <div className="HomeAboutus">
        <HomeAboutus />
      </div>
      <div>
        <Procedure />
      </div>
      <div className="Featured">
        <FeaturedNfts />
      </div>
      <div className="Newsletter">
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
