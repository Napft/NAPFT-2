import Heroimg from "./Heroimg"

const Herosection = () => {
  return (
  <>

<div className="text-center h-[80vh] flex flex-col justify-around items-center bg-black">
    
      <div className="flex flex-col gap-3 items-center px-2" id="herotext">
        <h1 className="text-white font-bold text-5xl xl:text-7xl" id="hero-h">Create, Buy and Sell<br/>
        Digital Arts,
        <span className="mr-2 text-blue-600">NFTs</span><br/>
         Collections
        </h1>
        <p className="text-slate-400 mt-2 text-2xl font-bold">A MarketPlace for newgen creators!!</p>
       
      </div>
  </div>

<div className="bg-black flex justify-center items-start px-3 pb-3 lg:px-0">
   <Heroimg/>
</div>
  

  

  {/* <div className="flex flex-col gap-5">
  <h1 className="text-2xl text-slate-200">Recent NFTs</h1>
  <h1 className="text-2xl text-slate-200">NO ARTWORKS YET</h1>
  <h1 className="text-2xl text-slate-200">NO TRANSACTION YET</h1>
  </div> */}
  
  
  </>
  )
}

export default Herosection
