import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
