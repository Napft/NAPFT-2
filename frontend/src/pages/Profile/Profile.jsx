import styled from "styled-components";
import image from "../../assets/WhatsApp Image 2024-02-27 at 22.45.51.jpeg";
import { AiFillEdit } from "react-icons/ai";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";

function Profile() {
  const ProfileDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  `;

  const ProfileSection = styled.div`
    width: 60vh;
    color: white;
    display: flex;
    margin: 12px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
  `;
  const Name = styled.p`
    padding: 5px;
    font-size: 25px;
  `;
  const Desc = styled.p``;

  const Edit = styled.button`
    background: none;
    border: 1px solid blue;
    color: blue;
    padding: 5px 20px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  `;

  const Links = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 5px 20px;
    /* margin: 5px; */
    &:hover {
      color: blue;
    }
  `;

  const LikedNFTS = styled.button`
    width: 100%;
    padding: 5px 20px;
    border: 1px solid blue;
  `;
  const OwnedNFTs = styled.button`
    width: 100%;
    padding: 5px 20px;
    border: 1px solid blue;
  `;


  return (
    <ProfileDiv>
      <ProfileSection>
        <Image src={image} alt="image" />
        <Name>John Doe</Name>
        <Desc>John Doe&apos;s description</Desc>
        <Edit>
          <AiFillEdit style={{ fontSize: "25px" }} />
          Edit profile
        </Edit>
        <Links>
          <IoIosLink style={{ fontSize: "20px", marginRight: "5px" }} />
          Visit
        </Links>
        <LikedNFTS>
          <p>Likes</p>
        </LikedNFTS>
        <OwnedNFTs>
          <p>Owned NFTs</p>
        </OwnedNFTs>
      </ProfileSection>
    </ProfileDiv>
  );
}

export default Profile;
