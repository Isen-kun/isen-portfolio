import Separator from "./Separator";
import SocialContact from "./SocialContact";

const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download="Rajorshi Ghosh's Resume.pdf"
            href={require("../images/resume.pdf").default}
          >
            <i className="fi-rr-cloud-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
