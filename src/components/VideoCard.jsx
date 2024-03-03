import styled from "styled-components";
import video from "../assets/bgVideoCard.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";

const Video = styled.div`
  position: relative;
  width: 90%;
  height: 80vh;
  /* margin-bottom: 10rem; */
`;
const VideoContainer = styled.video`
  opacity: 40%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;
const H1 = styled.h1`
  color: white;
  font-weight: bold;
  line-height: 4rem;
  font-size: 3.2rem;
  padding: 15px 0;
`;
const Paragraph = styled.p`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: bold;
  color: #e4d4d4;
  margin-top: 2px;
  font-size: 1.6rem;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  background: white;
  border: 1px solid black;
  border-radius: 25px;
  color: black;
  margin: 12px 0;
  padding: 10px 30px;
  &:hover {
    background: none;
    color: #176cebed;
    border: 1px solid #176cebed;
  }
`;

const VideoCard = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Video data-aos="fade-up">
      <VideoContainer src={video} autoPlay loop muted />
      <ContentOverlay>
        <H1>Step into the Digital gallery</H1>
        <Paragraph>
          Innovate, Create,{" "}
          <strong style={{ color: "blue", fontSize: "2rem" }}>nft</strong>{" "}
        </Paragraph>
        <ButtonDiv>
          <Button>
            Explore NFTs <FaArrowRightLong />
          </Button>
        </ButtonDiv>
      </ContentOverlay>
    </Video>
  );
};

export default VideoCard;
