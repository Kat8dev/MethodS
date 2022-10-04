import Footer from "../components/Footer";
import { HomeWrapper } from "../styled/HomeWrapper";
import Articles from "../components/Articles";
import Events from "../components/Events";
import RightBar from "../components/RightBar";

const Home = () => {

  return (
    <>
      <HomeWrapper>
        <RightBar className="some-info" />
        <Articles className="article" />
        <Events className="event" />
      </HomeWrapper>
      <Footer />
    </>
  )
}

export default Home;
