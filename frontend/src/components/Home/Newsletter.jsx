import * as React from 'react'
import "../../css/newsletter.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="newsletterDiv" data-aos="fade-up">
      <p>Get updated</p>
      <form className="newsletter">
        <input
          type="email"
          placeholder="Your email"
          className="email"
          required
        />
        <button className="subscribeBtn">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
