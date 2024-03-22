import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { NFTMarketplaceProvider } from './context/NFTMarketplaceContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NFTMarketplaceProvider>
    <Router>
       <App />
    </Router>   
    </NFTMarketplaceProvider>
  </React.StrictMode>,
)
