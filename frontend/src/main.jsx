import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NFTMarketplaceProvider } from "./context/NFTMarketplaceContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <NFTMarketplaceProvider>
      <Router>
        <Toaster position="top-center" reverseOrder={false} /> <App />
      </Router>
    </NFTMarketplaceProvider>
  // </React.StrictMode>
);
