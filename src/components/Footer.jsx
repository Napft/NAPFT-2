import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #1c1f2b;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
`;

const LogoDiv = styled.div`
  width: 120px;
  height: 100px;
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
`;

const Footer = () => {
  let NavItems = ["Home", "MarketPlace", "AboutUs", "PersonalPage"];
  return (
    <FooterDiv>
      <div>
        <LogoDiv className="logo" />
        <Paragraph>A MarketPlace for newgen creators!</Paragraph>
      </div>
      <Items>
        {NavItems.map((x, index) => (
          <ItemSpan key={index}>{x}</ItemSpan>
        ))}
      </Items>

      <PReserved>
        &copy; {new Date().getFullYear()} NapFT. All rights reserved
      </PReserved>
    </FooterDiv>
  );
};

export default Footer;
