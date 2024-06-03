import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa6";
import { useState } from "react";
import { truncate } from "../store/index";
import { useNFTMarketplace } from "../context/NFTMarketplaceContext";
// import Aos from "aos";
// import "aos/dist/aos.css";
import Modal from './Modal'


const fadeInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px); /* Starting position below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Ending position at top */
  }
`;

const HomeDiv = styled.div`
  background-color: #1c1f2b;
  position: fixed;
  width: 100%;
  z-index: 1000;
  @media screen and (max-width: 900px) {
    height: max-content;
    padding: 1rem 10px;
    width: 100%;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 2px;
  padding: 10px 0px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const LogoDiv = styled.div`
  width: 80px;
  height: 60px;
  margin-right: 5px;
  padding: 0;
`;

const LogoDiv1 = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    width: 80px;
    height: 60px;
    margin: 0;
    padding: 0;
  }
`;

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 200px;
  gap: 14px;
`;
const NavSpan = styled.span`
  color: gray;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
  margin-left: 1px;
  padding-left: 0;
  @media screen and (max-width: 900px) {
    display: flex;
    gap: 0px;
    margin: 15px;
    justify-content: space-between;
  }
`;

const InnerButton = styled.button`
  background: none;
  border: 1px solid #176cebed;
  border-radius: 25px;
  color: white;
  padding: 5px 25px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 240px;
  background-color: #1c1f2b;
  animation: ${fadeInUpAnimation} 0.5s ease-in-out; /* Applying the animation */
`;

const DropdownItem = styled.div`
  color: gray;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: white;
  }
`;

const SmallScreen = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Navbar = () => {
  const { connectedAccount, connectWallet } = useNFTMarketplace();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const[showModal , setshowModal] = useState(false);


  let NavItems = ["Home", "MarketPlace", "AboutUs", "Profile"];

  const handleNavItemClicked = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  // React.useEffect(() => {
  //   Aos.init({ duration: 200 });
  // }, []);
  return (

    <>
      <HomeDiv>
        <HomeContainer>
          <LogoDiv className="logo"></LogoDiv>

          <NavItem>
            {NavItems.map((x, index) => (
              <Link key={index} to={x == "Home" ? "/" : `/${x.toLowerCase()}`}>
                <NavSpan>{x}</NavSpan>
              </Link>
            ))}
          </NavItem>

          <ButtonDiv>
            {connectedAccount  ? (
              () => setshowModal(false),
              <InnerButton>{truncate(connectedAccount, 4, 4, 11)}</InnerButton>
            ) : (
              <InnerButton onClick={() => setshowModal(true)}>Connect Wallet</InnerButton>
            )}
            {connectedAccount ? (
            <Link to="/mint">
              <InnerButton>Mint your NFT</InnerButton>
            </Link>) : (
              <InnerButton onClick={() => setshowModal(true)}>Mint your NFT</InnerButton>
            )}
          </ButtonDiv>
        </HomeContainer>
        <SmallScreen>
          <LogoDiv1 className="logo"></LogoDiv1>
          <div className="nav-icon" >
            <FaGripLines
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="nav"
            />

            {isDropdownOpen && (
              <DropdownMenu>
                {NavItems.map((x, index) => (
                  <Link
                    key={index}
                    to={x === "Home" ? "/" : `/${x.toLowerCase()}`}
                    onClick={handleNavItemClicked}
                  >
                    <DropdownItem>{x}</DropdownItem>
                  </Link>
                ))}
                <ButtonDiv>
                {connectedAccount  ? (
              () => setshowModal(false),
              <InnerButton>{truncate(connectedAccount, 4, 4, 11)}</InnerButton>
            ) : (
              <InnerButton onClick={() => setshowModal(true)}>Connect Wallet</InnerButton>
            )}                  
            {connectedAccount ? (
              <Link to="/mint">
                <InnerButton>Mint your NFT</InnerButton>
              </Link>) : (
                <InnerButton onClick={() => setshowModal(true)}>Mint your NFT</InnerButton>
              )}
                </ButtonDiv>
              </DropdownMenu>
            )}
          </div>
        </SmallScreen>
      </HomeDiv>

      {
          showModal && <Modal close = {()=>{setshowModal(false)}}/>
      } 
      
    </>
  );
};

export default Navbar;
