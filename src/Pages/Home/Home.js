import AboutMe from "./AboutMe";
import {
  HomeMainHeader,
  HomeMainHeaderImg,
} from "../../Components/Styles/Home/Home.styled";
const Home = () => {
  return (
    <>
      <HomeMainHeader>
        <HomeMainHeaderImg src="./assets/img/homeback.png" />
      </HomeMainHeader>
      <AboutMe />
    </>
  );
};

export default Home;
