import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import nftImage from "../assets/nft-1.jpeg";
import nftImage2 from "../assets/nft-2.jpeg";

const SliderDiv = styled.div`
  align-items: center;
  text-align: center;
  margin: 5px 0;
  height: 80vh;
  @media screen and (max-width: 450px) {
    height: 70vh;
    margin: 3px 0;
  }

`;

const H1 = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 50px;
`;

const InnerDiv = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 2px 22px;
  color: white;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 10px;
  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
const Paragraph = styled.p`
  text-align: center;
  margin: 10px 0;
  font-size: 15px;
  @media screen and (max-width: 450px) {
    margin: 5px 0;
    font-size: 10px;
  }
`;
const ButtonSec = styled.button`
  background-color: none;
  border: 1px white solid;
  color: white;
  font-size: 1rem;
  border-radius: 25px;
  margin: 20px;
  padding: 3px 25px;
  &:hover {
    color: #176cebed;
    border: 1px solid #176cebed;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 160px;
    border-radius: 12px;
  }
`;

const TextDiv = styled.div`
  display: grid;
  padding: 0 20px;
  @media screen and (max-width: 450px) {
    padding: 5px 8px;
  }
`;

const Slider = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <SliderDiv data-aos="fade-up">
      <H1>Our featured NFTs</H1>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        id="swiper"
      >
        <SwiperSlide>
          <InnerDiv>
            <div>
              <Image src={nftImage} alt="image" />
            </div>
            <TextDiv>
              <div>
                <H2>first nft</H2>
              </div>
              <div>
                <Paragraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  nam, qui maxime fuga totam et omnis rerum quam aperiam quasi.
                </Paragraph>
              </div>

              {/* <div>
                <ButtonSec>Buy</ButtonSec>
              </div> */}
            </TextDiv>
          </InnerDiv>
        </SwiperSlide>
        <SwiperSlide>
          <InnerDiv>
            <div>
              <Image src={nftImage2} alt="image" />
            </div>
            <TextDiv>
              <div>
                <H2>second nft</H2>
              </div>
              <div>
                <Paragraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  nam, qui maxime fuga totam et omnis rerum quam aperiam quasi.
                </Paragraph>
              </div>

              {/* <div>
                <ButtonSec>Buy</ButtonSec>
              </div> */}
            </TextDiv>
          </InnerDiv>
        </SwiperSlide>
      </Swiper>
    </SliderDiv>
  );
};

export default Slider;
