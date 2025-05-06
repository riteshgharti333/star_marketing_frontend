import "./Production.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { graphicCards } from "../../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { productionServiceData } from "../../../assets/serviceSliderData/serviceSliderData";
import SEO from "../../../components/SEO/SEO";
import { Link, useLocation } from "react-router-dom";

import pdimg1 from "../../../assets/images/servicesImgs/designImgs/productionImgs/pdimg1.jpg";
import pdimg2 from "../../../assets/images/servicesImgs/designImgs/productionImgs/pdimg2.jpg";

const Production = () => {
  const title =
    "Create powerful content that captures attention and drives engagement";
  const desc =
    "From concept to final cut, our production team delivers high-quality visuals that tell your story, elevate your brand, and perform across all platforms.";
  const smdesc = "Production";

  const [selectedProject, setSelectedProject] = useState("Lila");

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="production">
      <SEO
        title="Production Services | Star Marketing - Video, Photo & Creative Content in India & UK"
        description="Star Marketing offers high-quality production services including corporate video production, product shoots, creative content creation, and commercial photography. Serving brands across India and the UK with professional visual storytelling."
        keywords="video production India, corporate shoot UK, content creation agency, product photography, creative production house, commercial video services, professional shoots, visual content agency, marketing production services"
        url={fullUrl}
      />

      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        production="production"
      />

      <div className="production-content">
        <ServiceSlider serviceData={productionServiceData} />
      </div>

      <div className="production-user">
        <div className="production-user-container">
          <div className="production-user-container-top">
            <img src={pdimg1} alt="production-image" loading="lazy" />
          </div>
          <div className="production-user-container-bottom">
            <div className="production-user-left">
              <h2>From Concept to Final Delivery</h2>
              <p>
                Production is where your ideas come to life. Whether it’s video,
                animation, photography, or multimedia content, our team ensures
                every detail is crafted with precision and purpose.
              </p>
              <p>
                We manage the entire production process — from pre-production
                planning and storyboarding to shooting, editing, and
                post-production — delivering high-quality content that resonates
                with your audience. With cutting-edge tools and a creative
                mindset, we transform your vision into impactful visuals that
                strengthen your brand and drive engagement. Our goal is to
                deliver production assets that not only look stunning but also
                align perfectly with your marketing strategy.
              </p>
            </div>
            <div className="production-user-right">
              <img src={pdimg2} alt="production-image" loading="lazy" />
            </div>
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

export default Production;
