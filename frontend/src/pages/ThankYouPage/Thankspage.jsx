import "./Thanks.css";
import {Link} from "react-router-dom";
const Thankspage = () => {
  return (
    <div className="ThanksContainer">
      <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for buy this Nft.</p>
            {/* <p>you should receive a confirmation email soon</p> */}
            <button className="go-home">
              <Link to="/marketplace">See more Nfts</Link>
            </button>
          </div>
          <div className="footer-like">
            <p>
              Want to know More About us?
              <Link to="/aboutus">Click here to Checkout</Link>
            </p>
          </div>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro"
        rel="stylesheet"
      />
    </div>
  );
};

export default Thankspage;
