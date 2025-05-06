import "./AboutBanner.scss";

import about_banner from "../../../assets/images/about-banner.jpg"

const AboutBanner = () => {

  return (
    <div className="about-banner">
      <div className="about-top">
        <img src={about_banner} alt="about-banner" loading="lazy" />

        <div className="about-banner-desc">
          <span>
            <div className="dot"></div> About Us
          </span>
          <h1>
            We strongly believe in the power of creativity and forward thinking
          </h1>
          <p>
            Star Marketing specialises in a full range of digital services for
            businesses. We have a dynamic group of exceptionally talented
            individuals who are all driven by a shared passion for what we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
