import styled from "styled-components";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterDiv = styled.div`
  background-color: #1c1f2b;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: 450px) {
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    padding: 30px 20px 40px;
  }
`;

const LogoDiv = styled.div`
  width: 120px;
  height: 100px;
  @media screen and (max-width: 450px) {
    width: 100px;
    height: 60px;
  }
`;

const Paragraph = styled.p`
  letter-spacing: 0.15em;
  font-weight: bold;
  color: gray;
  font-size: 0.8rem;
`;
const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 5px;
    margin: 10px 0;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    gap: 5px;
    margin: 10px 0;
  }
`;

const ItemSpan = styled.div`
  color: gray;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const PReserved = styled.p`
  color: gray;
  &:hover {
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 450px) {
    margin-top: 12px;
  }
`;

const LogoCommon = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  let NavItems = ["Home", "MarketPlace", "AboutUs", "PersonalPage"];
  return (
    <FooterDiv>
      <LogoCommon>
        <LogoDiv className="logo" />
        <Paragraph>A MarketPlace for newgen creators!</Paragraph>
      </LogoCommon>
      <Items>
        {NavItems.map((x, index) => (
          <ItemSpan key={index}>{x}</ItemSpan>
        ))}
      </Items>
      <Socials>
        <Link to={"https://x.com/Napftofficial?s=20"} target="_blank">
          <FaSquareXTwitter className="icon" />
        </Link>
        <Link
          to={
            "https://www.instagram.com/napft_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          }
          target="_blank"
        >
          <RiInstagramFill className="icon" />
        </Link>
        <Link
          to={"https://www.linkedin.com/company/napft-technology/"}
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </Link>
        <a href="mailto:mail.napft@gmail.com">
          <MdEmail className="icon" />
        </a>{" "}
      </Socials>

      <PReserved>
        &copy; {new Date().getFullYear()} NapFT. All rights reserved
      </PReserved>
    </FooterDiv>
  );
};

export default Footer;
