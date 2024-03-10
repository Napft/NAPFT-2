import styled from "styled-components";
import image2 from "../../assets/WhatsApp Image 2024-02-27 at 22.45.52.jpeg";


const ProfileAbout = styled.div`
  width: 100%;
  color: white;
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow-y: auto; */
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Images = styled.img`
  border-radius: 20px;
  padding: 12px;
  width: 250px;
  height: 250px;
  display: flex;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 40px 0 0;
`;

function OwnedNFTS() {
  
  return (
    <ProfileAbout>
      <Paragraph>Likes</Paragraph>
      <ImageDiv>
        <Images src={image2} alt="" />
        <Images src={image2} alt="" />
        <Images src={image2} alt="" />
        <Images src={image2} alt="" />
        <Images src={image2} alt="" />
        <Images src={image2} alt="" />
        <Images src={image2} alt="" />
        <Images src={image2} alt="" />
      </ImageDiv>
    </ProfileAbout>
  );
}

export default OwnedNFTS;
