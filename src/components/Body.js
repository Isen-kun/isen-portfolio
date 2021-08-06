import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
// import Work from "./Work";
import Contact from "./Contact";

const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="work">
        <Work />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
