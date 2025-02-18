// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NapFT is ERC721URIStorage, ReentrancyGuard {
    address payable private immutable OWNER;
    uint256 private _tokenIds;
    address public Admin;
    address private PreviousAdmin;
    // Service fee in basis points (e.g., 250 = 2.5%)
    uint256 public serviceFee;
    IERC20 public paymentToken; // ERC-20 token for transactions on SKALE

    mapping(uint256 => uint256) private priceOfNFT;
    mapping(uint256 => uint8) private RoyalityFees;
    mapping(uint256 => address[]) private TransactionHistory;
    // New mapping to track if NFT is listed for sale

    event Mint(address indexed creator, uint256 indexed tokenId, string indexed tokenURI);
    event Buy(address indexed from, address indexed to, uint256 tokenId, uint256 price);
    event LogChangeAdmin(address indexed previousAdmin, address indexed newAdmin);
    event ServiceFeeUpdated(uint256 newFee);

    modifier OnlyOwner() {
        require(msg.sender == OWNER, "Only the owner can perform this action");
        _;
    }

    modifier OnlyAdmin() {
        require(msg.sender == Admin, "Only the admin can perform this action");
        _;
    }

    constructor(address _paymentToken) ERC721("Napft", "NAPFT") {
        OWNER = payable(msg.sender);
        Admin = msg.sender;
        PreviousAdmin = msg.sender;
        serviceFee = 250; // 2.5% service fee
        paymentToken = IERC20(_paymentToken);
    }

    function updateServiceFee(uint256 _serviceFee) external OnlyAdmin {
        serviceFee = _serviceFee;
        emit ServiceFeeUpdated(_serviceFee);
    }

    function createToken(string memory tokenURI, uint256 price, uint8 royalityFee) 
        external 
        returns (uint256)
    {
        require(tx.origin == msg.sender, "Only EOA can mint NFT");
        require(price > 0, "Price must be greater than zero");

        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        TransactionHistory[newTokenId].push(msg.sender);
        priceOfNFT[newTokenId] = price;
        RoyalityFees[newTokenId] = royalityFee;

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        emit Mint(msg.sender, newTokenId, tokenURI);
        return newTokenId;
    }

    function batchMint(address to, string[] memory tokenURIs) external {
        require(tx.origin == msg.sender, "Only EOA can mint NFT");
        
        uint256 length = tokenURIs.length;
        require(length > 0, "Must mint at least one NFT");
        
        for (uint256 i = 0; i < length; i++) {
            _tokenIds++;
            uint256 newTokenId = _tokenIds;
            
            TransactionHistory[newTokenId].push(to);  // Record actual recipient as creator
            priceOfNFT[newTokenId] = 0; // Set default price
            RoyalityFees[newTokenId] = 0; // No royalties by default

            _safeMint(to, newTokenId);
            _setTokenURI(newTokenId, tokenURIs[i]);

            emit Mint(to, newTokenId, tokenURIs[i]);
        }
    }

    function buy(uint256 tokenId) external nonReentrant {
        require(msg.sender != ownerOf(tokenId), "Cannot buy your own NFT");
        uint256 price = priceOfNFT[tokenId];
        address seller = ownerOf(tokenId);
        // address creator = TransactionHistory[tokenId][0];
        
        // Calculate fees using basis points (10000 = 100%)
        uint256 royalityFee = (price * RoyalityFees[tokenId]) / 100;
        uint256 serviceFees = (price * serviceFee) / 10000;  // serviceFee is in basis points
        uint256 actualPrice = price - (royalityFee + serviceFees);

        require(
            paymentToken.transferFrom(msg.sender, seller, actualPrice),
            "Payment to seller failed"
        );
        // require(
        //     paymentToken.transferFrom(msg.sender, creator, royalityFee),
        //     "Royalty payment failed"
        // );
        require(
            paymentToken.transferFrom(msg.sender, Admin, serviceFees),
            "Service fee payment failed"
        );

        TransactionHistory[tokenId].push(msg.sender);
        _transfer(seller, msg.sender, tokenId);
        require(ownerOf(tokenId) == msg.sender, "NFT transfer failed");
        emit Buy(seller, msg.sender, tokenId, price);
    }

    function changeAdmin(address _newAdmin) external OnlyOwner {
        PreviousAdmin = Admin;
        Admin = _newAdmin;
        emit LogChangeAdmin(PreviousAdmin, Admin);
    }

    function getNFTDetails(uint256 tokenId)
        external
        view
        returns (address creator, address owner, uint256 price, string memory ipfsHash, uint256 royalityFee)
    {
        creator = TransactionHistory[tokenId][0];
        owner = ownerOf(tokenId);
        price = priceOfNFT[tokenId];
        ipfsHash = tokenURI(tokenId);
        royalityFee = RoyalityFees[tokenId];
    }

    function withdraw() external OnlyAdmin {
        require(
            paymentToken.transfer(msg.sender, paymentToken.balanceOf(address(this))),
            "Withdrawal failed"
        );
    }
}
