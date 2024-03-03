import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import MarketPlace from "./pages/MarketPlace";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Mint from "./pages/Mint";

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/mint" element={<Mint />}></Route>
        <Route path="/aboutus" element={<About/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
