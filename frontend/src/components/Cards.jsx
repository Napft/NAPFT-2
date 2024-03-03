import { Grid } from "@mui/material";

import SingleNFTcard from "./SingleNFTcard";

function Cards() {
  
  return (
    <>
    <h2 className="text-white text-3xl mt-5 font-semibold ">Our Collections</h2>
    <div className="flex justify-center items-center flex-wrap gap-4 mt-8 w-[90%] mx-auto">
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
      <SingleNFTcard/>
    </div>
     
      
   
    </>
  );
}

export default Cards;
