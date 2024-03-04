import { Button, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import nft from '../assets/nft-1.jpeg'
import { Link } from "react-router-dom"; 


const SingleNFTcard = () => {
  return (
  //  <Card sx={{ width: '250px',  padding: '10px', borderRadius: '5px' , transition: 'all 0.5s ease-in-out' , background: 'black'}} className="  cursor-pointer hover:shadow-2xl hover:shadow-blue-500" id="card" data-aos = "fade-down">

  //     <CardMedia image={nft} sx={{ height: 180 }} className="hover:scale-105 ease-in-out duration-500 rounded-lg" />
  //     <CardContent sx={{ color: "white" }}>
  //       <h2 className="text-lg font-semibold">nft-1</h2>
  //       <p className="text-slate-300">
  //         Lorem ipsum dolor sit amet consectetur.
  //       </p>
  //     </CardContent>
  //     <CardActions>
  //       <Grid container justifyContent="center">
  //         <Button size="large" variant="contained" sx={{ borderRadius: '20px' }} className="w-full">
  //           Buy
            
  //         </Button>
  //       </Grid>
  //     </CardActions>
  //   </Card>

  
   <Link to='/nftdetails'><div className="text-left w-80 overflow-hidden cursor-pointer shadow-lg shadow-blue-400 rounded-xl" >
      <div className="w-full h-72 overflow-hidden">
      <img src={nft} className="w-full hover:scale-110 h-[100%] ease-in-out duration-500"/>
      </div>
      
      <div className="p-3 flex flex-col gap-3">
      <p className="text-white text-lg">Name</p>
      <p className="text-slate-200 font-semibold">0.003 MATIC</p>
      </div>
      
      <button className="bg-slate-800 w-full py-2 text-white text-lg hover:bg-slate-900">Buy</button>
     </div></Link>  
  
  )
}

export default SingleNFTcard
