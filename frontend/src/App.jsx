import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import MarketPlace from "./pages/MarketPlace";
import About from "./pages/About";
import NFTdetails from "./pages/NFTdetails";
import { Routes, Route } from "react-router-dom";
import Mint from "./pages/Mint";
import ProfileLayout from "./pages/Profile/Layout";
import { useEffect } from "react";
import { useNFTMarketplace } from "./context/NFTMarketplaceContext";
export default function App() {
  const { getAllNFTs } = useNFTMarketplace();
  useEffect(() => {
    // getAllNFTs()
    // console.log("Getting all NFTs...")
  }, []);
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/mint" element={<Mint />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/nftdetails" element={<NFTdetails />}></Route>
        <Route path="/profile" element={<ProfileLayout />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
