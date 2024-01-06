import Banner from "./components/Banner";
import Profesonaly from "./components/Profesonaly";
import Services from "./components/Services";
import SubmitFrom from "./components/SubmitFrom";
import Testemonial from "./components/Testemonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Profesonaly></Profesonaly>
      <Testemonial></Testemonial>
      <SubmitFrom></SubmitFrom>
    </div>
  );
};

export default Home;
