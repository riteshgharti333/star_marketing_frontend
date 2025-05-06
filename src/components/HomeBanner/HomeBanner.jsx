import "./HomeBanner.scss";

import banner_video from "../../assets/bannerVideo/bannervideo.mp4";
import { brandCards } from "../../assets/serviceSliderData/partnerCards";
import { homeBrandCards } from "../../assets/data";

function HomeBanner() {
  return (
    <div className="homeBanner">
      <div className="banner-video">
        <video src={banner_video} autoPlay loop muted playsInline />

        <div className="homeBanner-video-desc">
          <p>
            <div className="dot"></div>Your digital partner
          </p>
          <h3>We accelerate ambition, grow brands</h3>
        </div>
      </div>

      <div className="homeBanner-desc">
        <h2>
          We accelerate ambition, grow brands, build digital products, and craft
          experiences that bring positive change, value, and innovation.
        </h2>
        <div className="homeBanner-desc-bottom">
          <p className="profile">
            <div className="dot"></div>Company Profile
          </p>
          <div className="homeBanner-desc-bottom-right">
            <p>
              We are a team of professional designers, developers, marketers and
              IT specialists combining our knowledge and expertise to create
              exceptional outcomes tailored to your business’s needs and
              requirements.
            </p>
            <p>
              With one of the largest ranges of services under one roof in the
              UK, Mumbai, Sikar. we are your trusted partner for all things
              digital. Tell us about your goals and we’ll show you how we can
              achieve them. Whatever your project, we’d love to be involved.
            </p>
          </div>
        </div>
      </div>

      <div className="homeBanner-cards-container">
        <div className="homeBanner-cards-track">
          {[...homeBrandCards, ...homeBrandCards].map((item, index) => (
            <div className="homeBanner-card" key={index}>
              <img src={item.img} alt="brand-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
