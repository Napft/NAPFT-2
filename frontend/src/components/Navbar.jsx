import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa6";
import { useState } from "react";

const HomeDiv = styled.div`
  background-color: #1c1f2b;
  position: fixed;
  width: 100%;
  z-index: 1000;
  @media screen and (max-width: 450px) {
    height: max-content;
    padding: 10px;
    width: 100%;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 2px;
  padding: 10px 0px;
  @media screen and (max-width: 450px) {
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
  @media screen and (max-width: 450px) {
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
  @media screen and (max-width: 450px) {
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let NavItems = ["Home", "MarketPlace", "AboutUs", "PersonalPage"];
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
            <InnerButton>Connect Wallet</InnerButton>
            <Link to="/mint">
              <InnerButton>Mint your NFT</InnerButton>
            </Link>
          </ButtonDiv>
        </HomeContainer>
        <SmallScreen>
          <LogoDiv1 className="logo"></LogoDiv1>
          <div className="nav-icon">
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
                  >
                    <DropdownItem>{x}</DropdownItem>
                  </Link>
                ))}
                <ButtonDiv>
                  <InnerButton>Connect Wallet</InnerButton>
                  <Link to="/mint">
                    <InnerButton>Mint your NFT</InnerButton>
                  </Link>
                </ButtonDiv>
              </DropdownMenu>
            )}
          </div>
        </SmallScreen>
      </HomeDiv>
    </>
  );
};

export default Navbar;
