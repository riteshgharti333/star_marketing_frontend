import "./AboutMission.scss";

import av1 from "../../../assets/images/av1.jpg";
import av2 from "../../../assets/images/av2.jpg";

const AboutMission = () => {
  return (
    <div className="aboutMission">
      <div className="about-mission">
        <h1>Delivering high quality services to each and every client</h1>

        <div className="about-mission-desc">
          <div className="about-mission-desc-left">
            <p>
              <div className="dot"></div>Our Mission
            </p>
          </div>
          <div className="about-mission-desc-right">
            <p>
              At Star Marketing, we believe that every brand has the potential
              to shine brilliantly in its own unique way. Founded on the
              principles of innovation, creativity, and dedication,
            </p>
            <p>
              We embarked on a mission to help businesses of all sizes reach for
              the stars and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="about-vision">
        <div className="about-vision-left">
          <p>
            <div className="dot"></div>Our Vision
          </p>
          <h3>
            We create comprehensive strategies and project plans that are
            carefully designed to meet the unique needs of each client, ensuring
            all aspects of your business goals hav1e been addressed. From the
            initial planning stages through to the successful execution of each
            step, we offer full support and guidance throughout the entire
            process. Our team remains fully engaged, providing continuous
            assistance and expertise, so that clients can confidently navigate
            their journey towards sustained business growth and long-term
            success. By aligning our work with your specific objectives, we
            ensure that every decision will drive meaningful progress.
          </h3>
        </div>

        <div className="about-vision-right">
          <img
            src={av1}
            alt="about-image"
            loading="lazy"
            className="img-desc"
          ></img>
          <img
            src={av2}
            alt="about-image"
            loading="lazy"
            className="img-desc img2"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
