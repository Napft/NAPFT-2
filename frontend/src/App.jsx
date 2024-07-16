import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarketPlace from "./pages/MarketPlace";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Owned from "./pages/Owned";
import MintNft from "./pages/MintNft";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Details";
import Home from "./components/Home/Home";
import { useNFTMarketplace } from "./context/NFTMarketplaceContext";
import { useEffect } from "react";

export default function App() {

  const { isWalletConnected } = useNFTMarketplace();
  useEffect(() => {
    isWalletConnected();
  }, []);
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/mint" element={<MintNft />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/ownedNFTS" element={<Owned />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
