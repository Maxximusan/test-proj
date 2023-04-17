import * as SC from "./Home.styled";
import bgimg from "../../images/rockstars.jpg";
import twBird from "../../images/tweetBird.jpg";

const HomePage = () => {
  return (
    <SC.ImageContainer>
      <SC.MainImage src={bgimg} alt="Звезда" />
      <SC.SecondImage src={twBird} alt="Птичка tweeter" />
    </SC.ImageContainer>
  );
};

export default HomePage;
