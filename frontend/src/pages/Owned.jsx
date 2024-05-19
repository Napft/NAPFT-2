
import nfts from "../OwnedNFTs"
import OwnedNFT from "../components/OwnedNFT"

const Owned = () => {
  return (
    <div className=" bg-black pt-[110px] pb-[80px] text-center">
      <h1 className="text-3xl font-semibold text-white pb-3">Owned NFTs</h1>
      <div className="flex items-center flex-wrap gap-5 w-[90%] mx-auto">
     {
      nfts.map((x , index) => {
        return(
          <OwnedNFT key={index} Name={x.name} price={x.price} des={x.description} img={x.image}/>
        )
      })
     }</div>
      
    </div>
  )
}

export default Owned
