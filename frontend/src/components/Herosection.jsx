import styled from "styled-components";
import Slider from "./Slider";
import VideoCard from "./VideoCard";

// import Heroimg from "./Heroimg";

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  overflow: hidden;
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
  margin-top: 2px;
  font-size: 1.6rem;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;

  /*typing range*/
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /*cursor effect*/
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    30% {
      border-color: none;
    }
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  padding: 12px;
`;

const H1 = styled.h1`
  color: white;
  font-weight: bold;
  line-height: 4rem;
  font-size: 4rem;
  padding: 15px 0;
`;
const ButtonDiv = styled.div`
  justify-content: center;
  align-items: center;
  padding: 18px;
`;
const Button = styled.button`
  font-size: 1.2rem;
  background: none;
  border: 1px solid #176cebed;
  /* border-radius: 5px 25px; */
  border-radius: 25px;
  color: white;
  padding: 5px 25px;
`;

const VideoCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 80vh;
  margin-bottom: 12rem;
`;

const Herosection = () => {
  return (
    <>
      <HeroDiv>
        <TextDiv id="herotext">
          <H1 id="hero-h">
            Create, Buy and Sell
            <br />
            Digital Arts,
            <span className="mr-2 text-blue-600">NFTs</span>
            <br />
            Collections
          </H1>
          <Paragraph>A market place for newgen creators!</Paragraph>
        </TextDiv>
        <ButtonDiv>
          <Button>Learn</Button>
        </ButtonDiv>
      </HeroDiv>

      <Slider />
      <VideoCardDiv>
        <VideoCard />
      </VideoCardDiv>
    </>
  );
};

export default Herosection;
