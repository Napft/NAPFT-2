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
import { Link } from "react-router-dom";

const SliderDiv = styled.div`
  align-items: center;
  text-align: center;
  margin: 5px 0;
  height: 70vh;
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

const Image = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 20px;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: max-content;
    border-radius: 12px;
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
            <Link to={"/marketplace"}>
              <Image src={nftImage} alt="image" />
            </Link>
          </InnerDiv>
        </SwiperSlide>
        <SwiperSlide>
          <InnerDiv>
            <Link to={"/marketplace"}>
              <Image src={nftImage2} alt="image" />
            </Link>
          </InnerDiv>
        </SwiperSlide>
      </Swiper>
    </SliderDiv>
  );
};

export default Slider;
