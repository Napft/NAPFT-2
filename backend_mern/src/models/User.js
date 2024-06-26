import mongoose, { Schema } from "mongoose";
// import connection from "../C1_config/database_config.js";
const user_schema = mongoose.Schema({
  metamask_ID: { type: String, unique: true, required: true },
  meta_data: { nounce: String, account_type: "PENDING" | "VERIFIED" },
  user_name: { type: String, unique: false, required: false, default: "" },
  user_profile_pic: { type: Buffer },
  user_bio: { type: String, default: "" },
  date_joined: { type: Date, default: Date.now },
  nftsOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
  nftsOwnedGetByIds: {
    type: [
      {
        NftId:String,
      }
    ]
  },
  resent_transactions: {
    type: [
      {
        date: Date,
        from: String,
        to: String,
        ammount: String,
        type: String,
      },
    ],
    default: [],
  },
  wish_list: {
    type: [
      {
        wishlist_name: String,
        wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
      },
    ],
  },
  Total_liked_nfts: {
    // type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }],
    type: [Number],
    default: [],
  },
  liked_nfts: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
    default: [],
  },
});

const user_model = mongoose.model("User", user_schema);
export default user_model;
