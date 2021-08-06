import SocialContact from "./SocialContact";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there ^_^, I am
          <br /> <span className="info-name">Rajorshi Ghosh.</span>
          <br />
          Currently doing undergrad in CSE.
        </div>
        <div className="about-photo">
          <img
            src={require("../images/Rajorshi.png").default}
            alt="Rajorshi"
            className="picture"
          />
        </div>
      </div>
      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
};

export default About;
