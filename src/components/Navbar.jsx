import styled from "styled-components";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeDiv = styled.div`
  background-color: #1c1f2b;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 2px;
  padding: 10px 0px;
`;

const LogoDiv = styled.div`
  width: 80px;
  height: 60px;
  margin-right: 5px;
  padding: 0;
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
`;

const InnerButton = styled.button`
  background: none;
  border: 1px solid #176cebed;
  border-radius: 25px;
  color: white;
  padding: 5px 25px;
`;
const Navbar = () => {
  let [disp, setdisp] = useState(true);

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

          <AiOutlineMenu
            className="text-white text-2xl font-bold lg:hidden"
            onClick={() => {
              setdisp(!disp);
            }}
          />
        </HomeContainer>
      </HomeDiv>

      {/* <div className={`bg-black h-screen ${disp && "hidden"}`}>
        <div
          className="flex flex-col items-start w-[93%] mx-auto py-3 gap-4"
          id="nav"
        >
          <div className="flex flex-col  gap-5">
            {NavItems.map((x, index) => (
              <Link key={index} to={x == "Home" ? "/" : `/${x.toLowerCase()}`}>
                <span
                  className="text-white hover:font-semibold cursor-pointer ease-in duration-200"
                  onClick={() => {
                    setdisp(true);
                  }}
                >
                  {x}
                </span>
              </Link>
            ))}
          </div>

          <div className="gap-2 flex flex-col w-full ">
            <button className="bg-gradient-to-r from-red-500 to bg-purple-500 hover:from-purple-500 to hover:bg-red-500 text-white p-3 rounded-full font-light ease-in duration-500 w-full">
              Connect Wallet
            </button>
            <button className="bg-gradient-to-r from-red-500 to bg-purple-500 hover:from-purple-500 to hover:bg-red-500 text-white p-3 rounded-full font-light ease-in duration-500 w-full">
              Mint your NFT
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
