import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import MarketPlace from "./pages/MarketPlace";
import About from "./pages/About";
import NFTdetails from "./pages/NFTdetails";
import { Routes, Route } from "react-router-dom";
import Owned from "./pages/Owned";
//import Mint from "./pages/Mint";
import MintNft from "./pages/MintNft";
import Profile from "./pages/Profile/Profile";
// import { useEffect } from "react";
export default function App() {
  // useEffect(() => {
  // }, []);
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/mint" element={<MintNft />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/nftdetails" element={<NFTdetails />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/ownedNFTS" element={<Owned/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
