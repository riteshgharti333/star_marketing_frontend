import "./AboutSlider.scss";

import { aboutSlide } from "../../../assets/data";

const AboutSlider = () => {
  return (
    <div className="aboutSlider">
      <div className="aboutSlider-imgs">
        <div className="aboutSlider-track">
          {[...aboutSlide, ...aboutSlide].map((item, index) => (
            <div className="aboutslider-img" key={index}>
              <img src={item.img} alt="team-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="aboutSlider-imgs2">
        <div className="aboutSlider-track">
          {[...aboutSlide, ...aboutSlide].map((item, index) => (
            <div className="aboutslider-img" key={index}>
              <img src={item.img} alt="team-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
