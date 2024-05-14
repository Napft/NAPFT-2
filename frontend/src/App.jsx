import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import MarketPlace from "./pages/MarketPlace";
import About from "./pages/About";
import NFTdetails from "./pages/NFTdetails";
import { Routes, Route } from "react-router-dom";
import Mint from "./pages/Mint";
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
        <Route path="/mint" element={<Mint />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/nftdetails" element={<NFTdetails />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
