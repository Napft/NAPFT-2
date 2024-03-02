
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
import MarketPlace from './pages/MarketPlace'
import { Routes , Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='bg-black'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Herosection/>}></Route>
          <Route path='/marketplace' element={<MarketPlace/>}></Route>
        </Routes>
      <Footer/>
    </div>
  )
}