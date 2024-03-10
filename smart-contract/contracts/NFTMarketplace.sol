//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTmarketplace is ERC721URIStorage {
    address payable private immutable OWNER;
    uint256 private _tokenIds;
    address public Admin;
    address private PreviousAdmin;
    uint256 public serviceFee;

    constructor() ERC721("Napftdev", "NAPFT") {
        OWNER = payable(msg.sender);
        Admin = msg.sender;
        PreviousAdmin = msg.sender;
        serviceFee = 250; //Divide by 100 whenever use it
    }

    // store token Id to price of nft
    mapping(uint256 => uint256) private priceOfNFT;

    // percentage royality to creator
    // map token to royality fee
    mapping(uint256 => uint8) private RoyalityFees;

    event Mint(
        address indexed creator,
        uint256 indexed tokenId,
        string indexed tokenURI
    );
    event Buy(
        address indexed from,
        address indexed to,
        uint256 tokenId,
        uint256 price
    );

    event LogchangeAdmin(address indexed previousAdmin, address indexed NewAdmin);

    // mapp token with their transaction history
    mapping(uint256 => address[]) private TransationHistory;

    modifier OnlyOwner() {
        require(msg.sender == OWNER, "Owner unauthorized");
        _;
    }

    modifier OnlyAdmin() {
        require(msg.sender == Admin, "Admin unauthorized");
        _;
    }

    function updateServiceFee(uint256 _serviceFee) public payable OnlyAdmin {
        serviceFee = _serviceFee;
    }
    
    function creatToken(
        string memory tokenURI,
        uint256 price,
        uint8 royalityfee
    ) external returns (uint256) {
        require(tx.origin == msg.sender, "only by EOA can mint NFT");
        require(price > 0, "should be some valuable price of nft");
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        TransationHistory[newTokenId].push(payable(msg.sender));
        priceOfNFT[newTokenId] = price;
        RoyalityFees[newTokenId] = royalityfee;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        emit Mint(msg.sender, newTokenId, tokenURI);

        return newTokenId;
    }

    function buy(uint256 tokenId) public payable {
        require(msg.sender == tx.origin, "Only EOA can interact");
        require(msg.sender != ownerOf(tokenId), "You can't buy your own NFT");
        uint256 price = priceOfNFT[tokenId];
        address seller = ownerOf(tokenId);
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        TransationHistory[tokenId].push(msg.sender);
        // transfer ether to creator of nft
        address creator = TransationHistory[tokenId][0];
        uint256 royalityfee = (price * RoyalityFees[tokenId]) / 100;
        uint256 serviceFees = (price * serviceFee) / 10000;
        uint256 actualPrice = price - (royalityfee + serviceFees);

        // transfer money to seller
        (bool success, ) = payable(seller).call{value: actualPrice}("");
        require(success, "Purchase Unsuccessful");

        // transfer royality fee to creator
        (bool success2, ) = payable(creator).call{value: royalityfee}("");
        require(success2, "Royality fee transfer failed to creator");

        // transfer service fee to Admin
        (bool success3, ) = payable(Admin).call{value: serviceFees}("");
        require(success3, "Service fee transfer failed");

        // transfer ownership to current buyer
        _transfer(seller, msg.sender, tokenId);
        require(ownerOf(tokenId) == msg.sender, "NFT not transfred");
        emit Buy(seller, msg.sender, tokenId, price);
    }

    function UpdateNftPrice(uint256 tokenId, uint256 price) external {
        require(msg.sender == ownerOf(tokenId), "Owner Unauthorized");
        priceOfNFT[tokenId] = price;
    }

    // Function to allow the owner of an NFT to remove it from the marketplace
    function removeFromMarketplace(uint256 tokenId) external {
        address owner = ownerOf(tokenId);

        // Ensure that the caller of this function is the owner of the NFT
        require(msg.sender == owner, "Only the owner can remove their NFT from the marketplace");

        // Transfer the NFT back to the owner
        _transfer(address(this), owner, tokenId);
    }
    
    function changeAdmin(address _newadmin) external OnlyOwner {
        PreviousAdmin = Admin;
        Admin = _newadmin;
        emit LogchangeAdmin(PreviousAdmin, Admin);
    }

    function GetNFTDetails(uint256 tokenId)
        external
        view
        returns (
            address creator,
            address owner,
            uint256 price,
            string memory IpfsHash
        )
    {
        creator = TransationHistory[tokenId][0];
        owner = ownerOf(tokenId);
        price = priceOfNFT[tokenId];
        IpfsHash = tokenURI(tokenId);
    }

    function GetTransactionHistory(uint256 tokenId)
        external
        view
        returns (address[] memory)
    {
        return TransationHistory[tokenId];
    }

    function GetCreatorOfNft(uint256 tokenId) external view returns (address) {
        return TransationHistory[tokenId][0];
    }

    function GetCurrentToken() external view returns (uint256) {
        return _tokenIds;
    }

    function GetNftPrice(uint256 tokenId) external view returns (uint256) {
        return priceOfNFT[tokenId];
    }

    function MyTotalNft(address user) external view returns (uint256) {
        return this.balanceOf(user);
    }

    function withdraw() external OnlyAdmin {
        payable(msg.sender).transfer(address(this).balance);
    }

    function getRoyalityFee(uint256 tokenId) external view returns (uint8) {
        return RoyalityFees[tokenId];
    }
}