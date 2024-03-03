import { Button, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import nft from '../assets/nft-1.jpeg'
const SingleNFTcard = () => {
  return (
    <Card sx={{ width: '250px',  padding: '10px', borderRadius: '5px' , transition: 'all 0.5s ease-in-out' , background: 'black'}} className="  cursor-pointer hover:shadow-2xl hover:shadow-blue-500" id="card" data-aos = "fade-down">

      <CardMedia image={nft} sx={{ height: 180 }} className="hover:scale-105 ease-in-out duration-500 rounded-lg" />
      <CardContent sx={{ color: "white" }}>
        <h2 className="text-lg font-semibold">nft-1</h2>
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center">
          <Button size="small" variant="contained" sx={{ borderRadius: '20px' }}>
            Buy
            
          </Button>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default SingleNFTcard
