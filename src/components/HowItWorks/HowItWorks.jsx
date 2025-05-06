import "./HowItWorks.scss";

import how_img from "../../assets/images/how.jpg";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="howitworks-left">
        <div className="howitworks-left-top">
          <h2>How It Works</h2>
          <p>
            Explore how our website functions, how social media strategies are
            implemented, and how everything works together to deliver impactful
            marketing results.
          </p>
        </div>

        <div className="howitworks-left-items">
          <Link to={"/how-website-works?"} className="how-link">How Website works?</Link>

          <Link to={"/how-social-media-works?"} className="how-link">How Social Media works?</Link>
        </div>
      </div>
      <div className="howitworks-right">
        <img src={how_img} alt="" />
      </div>
    </div>
  );
};

export default HowItWorks;
