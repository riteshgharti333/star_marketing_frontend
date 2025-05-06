import { Link } from "react-router-dom";
import "./Story.scss";

const Story = () => {
  return (
    <div className="story">
      <div className="story-top">
        <div className="story-top-left">
          <p>
            <div className="dot"></div>Our Story
          </p>
        </div>

        <div className="story-top-right">
          <h2>We’re the Holistic Plus+ Digital Agency</h2>
          <p>
            At Star Marketing, we are a dynamic team of skilled digital
            marketing professionals dedicated to crafting customized marketing
            strategies. Our expertise lies in helping clients connect with their
            target audience, achieve their business goals, and maximize their
            online presence. We prioritize constant learning and innovation to
            stay ahead of industry trends, ensuring exceptional customer service
            and unwavering support for all our clients.
          </p>
          <Link className="primary-btn" to={"/contact-us"}>
            Your Digittal Partner
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
