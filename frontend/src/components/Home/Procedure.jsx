import * as React from "react";
import "../../css/procedure.css";
import image from "../../assets/nft home/face.png";
import { FaWallet } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const Procedure = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="procedureDiv" data-aos="fade-up">
      <div className="header">
        <p>Enter the NFT Arena</p>
      </div>
      <div className="stepsDiv">
        <div className="steps">
          <div className="stepCard">
            <p className="stepnumber">Step 1</p>
            <div className="innerStep">
              <FaWallet className="stepicon" />
              <div className="texts">
                <p className="headText">Connect wallet</p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="stepCard">
            <p className="stepnumber">Step 2</p>
            <div className="innerStep">
              <FaWallet className="stepicon" />
              <div className="texts">
                <p className="headText">Buy</p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="stepCard">
            <p className="stepnumber">Step 3</p>
            <div className="innerStep">
              <FaWallet className="stepicon" />
              <div className="texts">
                <p className="headText">Create collection</p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="stepCard">
            <p className="stepnumber">Step 4</p>
            <div className="innerStep">
              <FaWallet className="stepicon" />
              <div className="texts">
                <p className="headText">Sell your NFT</p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="imageDiv">
          <div className="circle"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <img src={image} className="image" />
        </div>
      </div>
    </div>
  );
};

export default Procedure;
