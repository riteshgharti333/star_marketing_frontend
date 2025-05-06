import "./WebDesign.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { webServiceData } from "../../../assets/serviceSliderData/serviceSliderData";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import webdImg from "../../../assets/images/servicesImgs/designImgs/webDesignImgs/webd.jpg";

const WebDesign = () => {
  const title =
    "Elevate your online presence with stunning and strategic web design";
  const desc =
    "We craft visually striking, user-focused websites that not only look amazing but drive results—customized for your brand, your audience, and your goals.";

  const smdesc = "Web Design";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="webDesign">
      <SEO
        title="Website Design Services | Star Marketing - Creative, Modern, Responsive Web Design in India & UK"
        description="Star Marketing specializes in high-converting, SEO-optimized website design services. We build responsive, user-friendly, and custom websites tailored for businesses in India and the UK. Get your professional web presence with Star today."
        keywords="website design India, website design UK, responsive web design, custom web development, business website, UI UX design, professional website, creative web design, mobile-friendly websites, sikar web agency, london web designers, mumbai website developers"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="webDesign-content">
        <ServiceSlider serviceData={webServiceData} />

        <div className="webDesign-btn">
          <Link className="primary-btn" to={"/contact-us"}>
            View All Work
          </Link>
        </div>
      </div>

      <div className="webDesign-user">
        <div className="webDesign-user-container">
          <div className="webDesign-user-left">
            <h2>Crafting Exceptional Web Experiences</h2>
            <p>
              A great website goes beyond just looking good — it should be
              intuitive, goal-driven, and built with your audience in mind.
            </p>
            <p>
              Every design choice influences how a user interacts with your
              brand, from the structure of your navigation to the placement of
              calls to action. Our approach to web design focuses on creating
              user-first digital experiences that are both visually compelling
              and functionally seamless. By combining strategic layout,
              thoughtful content, and responsive design, we ensure your visitors
              are guided toward key actions that drive real results. Our web
              designers collaborate with developers, marketers, and content
              specialists to craft websites that don’t just look great — they
              convert.
            </p>
          </div>
          <div className="webDesign-user-right">
            <img src={webdImg} alt="web-design-image" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="empty-div" style={{ paddingTop: "100px" }}></div>
    </div>
  );
};

export default WebDesign;
