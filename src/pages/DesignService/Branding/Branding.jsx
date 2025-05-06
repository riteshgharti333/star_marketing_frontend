import "./Branding.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { aboutCards, graphicCards } from "../../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { brandingServiceData } from "../../../assets/serviceSliderData/serviceSliderData";
import SEO from "../../../components/SEO/SEO";
import { Link, useLocation } from "react-router-dom";

import bimg from "../../../assets/images/servicesImgs/designImgs/brandingimgs/bimg.jpg";

const Branding = () => {
  const title = "Build a brand that stands out and speaks volumes";
  const desc =
    "We craft distinctive brand identities that reflect your vision, connect with your audience, and create lasting impact across digital and print platforms.";

  const smdesc = "Branding";

  const [selectedProject, setSelectedProject] = useState("Lila");

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="branding">
      <SEO
        title="Branding Services | Star Marketing - Build a Powerful Brand Identity in India & UK"
        description="Elevate your brand with Star Marketing’s expert branding services including brand strategy, identity design, logo creation, and brand messaging. Trusted by businesses in India and the UK to craft unforgettable brand experiences."
        keywords="branding agency India, brand identity design, logo and branding UK, brand strategy experts, creative branding solutions, rebranding services, brand development, visual identity, business branding India, UK brand consultants"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="branding-content">
        <ServiceSlider serviceData={brandingServiceData} />
      </div>
      <div className="branding-works">
        <div className="branding-works-container">
          <div className="branding-works-top">
            <button
              className={selectedProject === "Lila" ? "active" : ""}
              onClick={() => setSelectedProject("Lila")}
            >
              Lila Connect
            </button>
            <button
              className={selectedProject === "Aria" ? "active" : ""}
              onClick={() => setSelectedProject("Aria")}
            >
              Aria Science
            </button>
            <button
              className={selectedProject === "Greensleeveless" ? "active" : ""}
              onClick={() => setSelectedProject("Greensleeveless")}
            >
              Greensleevless
            </button>
          </div>

          <div className="branding-works-cards">
            {selectedProject === "Lila" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/lila-story-cards.jpg"
                alt="Lila Connect"
                loading="lazy"
              />
            )}

            {selectedProject === "Aria" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/arias-science-passes.jpg"
                alt="Aria Science"
                loading="lazy"
              />
            )}

            {selectedProject === "Greensleeveless" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/lila-story-cards.jpg"
                alt="Greensleevless"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>

      {/* //////////////////     */}
      <div className="branding-user">
        <div className="branding-user-container">
          <div className="branding-user-left">
            <h2>Building a Brand That Lasts</h2>
            <p>
              Your brand is more than just a logo — it's the complete identity
              of your business and the first impression you leave with your
              audience.
            </p>
            <p>
              Effective branding builds trust, creates recognition, and
              emotionally connects with your target audience. Our branding
              experts work with you to define your brand’s voice, values, and
              visual identity, ensuring every touchpoint communicates a
              consistent and compelling message. From brand strategy and naming
              to logo design and brand guidelines, we craft identities that are
              memorable, authentic, and built to grow with your business.
              Whether you're starting fresh or rebranding, we'll help you tell
              your story with clarity and confidence.
            </p>
          </div>
          <div className="branding-user-right">
            <img src={bimg} alt="branding-service-image" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="bottom-btn">
        <Link className="primary-btn" to={"/contact-us"}>
          View all work
        </Link>
      </div>
    </div>
  );
};

export default Branding;
