import NFT_model from "../models/NftModel.js";

export const testNft = async (req, res) => {
  res.json({
    success: true,
    message: "this is a testing message from NFT Controller",
  });
};


//New NFT creation
export const newNft = async (req, res) => {
  try {
    const { IPFS_hash, NFT_token_ID, title, price, description } = req.body;

    // Provide default values for required fields if not provided by the frontend
    const creator_metamask_ID =
      req.body.creator_metamask_ID || "default_creator_metamask_ID";
    const owner_metamask_ID =
      req.body.owner_metamask_ID || "default_owner_metamask_ID";

    const newNFT = await new NFT_model({
      IPFS_hash,
      NFT_token_ID,
      section_basic_info: {
        title,
        description,
        creator_metamask_ID,
        owner_metamask_ID,
      },
      section_price_info: {
        price_timeline: [{ timestamp: new Date(), price }],
        transaction_history: [],
      },
      // section_additional_info: {
      //   tags: [],
      //   votes_count: 0,
      //   total_view_count: 0,
      //   views: [],
      //   comments: [],
      // },
      // section_services_info: {
      //   resnet50_lantent_space_vector: [],
      //   cached_resnet50_recommendations: [],
      // },
    });

    const result = await newNFT.save();
    res.status(201).json({
      success: true,
      message: "new NFT creation sucessfull",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
