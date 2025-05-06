import { Link } from "react-router-dom";
import "./AboutCulture.scss";

const AboutCulture = () => {
  return (
    <div className="aboutCulture">
      <div className="aboutCulture-top-left">
        <p>
          <div className="dot"></div>Our Culture
        </p>
      </div>

      <div className="aboutCulture-top-right">
        <h2>A culture focused on ambitious growth</h2>
        <p>
          Blue Frontier is a dynamic, fast-paced agency that prioritises
          teamwork, partnership, and positive growth above all else. We are
          committed to creating a welcoming environment where every team member
          feels valued and appreciated. Our teams are consistently encouraged to
          expand their knowledge and develop new skills, empowering them to
          reach their full potential. We believe that fostering an open,
          communicative, and energetic workplace fuels creativity, learning,
          ambition, and problem-solving. By cultivating a culture rooted in
          collaboration, transparent communication, and continuous development,
          we are proud to help our team thrive with confidence that’s reflected
          in the work they produce.
        </p>
        <Link className="primary-btn" to={"/contact-us"}>
          Our Values & Culture
        </Link>
      </div>
    </div>
  );
};

export default AboutCulture;
