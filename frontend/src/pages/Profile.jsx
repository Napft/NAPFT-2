import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import image from "../assets/Untitled design.png";
import { AiFillEdit } from "react-icons/ai";
import { MdDataSaverOn } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import videoSource from "../assets/sun_-_46410 (1440p).mp4";
import { Link } from "react-router-dom";

function Profile() {
  useEffect(() => {
    window.scrollTo(0,0);
    Aos.init({ duration: 1000 });
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [description, setDescription] = useState("John Doe's Description");
  const [profileImage, setProfileImage] = useState(image);

  const nameRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setName(nameRef.current.value);
    setDescription(descRef.current.value);
    setIsEditing(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const ProfileDiv = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  `;

  const ProfileSection = styled.div`
    color: #ffffff;
    display: flex;
    margin: 10px 0 0;
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
    padding: 2px;
    font-size: 35px;
  `;
  const Desc = styled.p`
    padding: 5px;
    font-size: 15px;
    color: gray;
    max-height: 100px;
    max-width: 500px;
    overflow: auto;
  `;
  const Edit = styled.button`
    background: none;
    border: 1px solid blue;
    color: blue;
    padding: 5px 20px;
    margin: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 0;
    padding: 20px;
    border: 1px solid gray;
  `;

  const LikedNFTS = styled.button`
    background: none;
    border: 1px solid #176cebed;
    border-radius: 25px;
    color: white;
    padding: 5px 25px;
  `;
  const OwnedNFTs = styled.button`
    background: none;
    border: 1px solid #176cebed;
    border-radius: 25px;
    color: white;
    padding: 5px 25px;
  `;
  const NameDiv = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: max-content; */
  `;
  const PageDiv = styled.div`
    margin: 20px;
    display: flex;
    width: 300px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  const VideoBackground = styled.video`
    position: fixed;
    right: 0;
    bottom: 2;
    top: 8;
    min-width: 100%;
    /* max-height: 70%; */
    height: max-content;
    z-index: -0.1;
    opacity: 0.19;
    overflow-y: hidden;
    background-size: auto;
    object-fit: cover;
  `;

  return (
    <>
      <ProfileDiv>
        <VideoBackground autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
        <ProfileSection data-aos="flip-left">
          <NameDiv>
            {isEditing ? (
              <Form onSubmit={handleSave}>
                x
                <Image src={profileImage} alt="profile" />
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  ref={imageRef}
                  onChange={handleImageChange}
                />
                <input
                  className="input"
                  ref={nameRef}
                  required
                  placeholder="Name"
                />
                <textarea
                  rows={2}
                  className="input"
                  ref={descRef}
                  maxLength={150}
                  required
                  placeholder="Describe yourself in 150 characters"
                />
                <Edit type="submit">
                  <MdDataSaverOn
                    style={{ fontSize: "25px", marginRight: "10px" }}
                  />
                  Save
                </Edit>
              </Form>
            ) : (
              <>
                <Image src={profileImage} alt="profile" />
                <Name>{name}</Name>
                <Desc>{description}</Desc>
              </>
            )}
            <Edit onClick={handleEdit}>
              <AiFillEdit style={{ fontSize: "25px" }} />
              {isEditing ? "Cancel" : "Edit profile"}
            </Edit>
          </NameDiv>

          <PageDiv>
            <LikedNFTS>
              <p>Liked NFTs</p>
            </LikedNFTS>
            
              <OwnedNFTs>
              <p><Link to='/ownedNFTS'>Owned NFTs</Link></p>
            </OwnedNFTs>
            
          </PageDiv>
        </ProfileSection>
      </ProfileDiv>
    </>
  );
}

export default Profile;
