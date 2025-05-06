import "./GraphicDesign.scss";

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
import { graphicServiceData } from "../../../assets/serviceSliderData/serviceSliderData";
import BrandCards from "../../../components/BrandCards/BrandCards";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import gdImg1 from "../../../assets/images/servicesImgs/designImgs/graphicDesignImgs/gd1.jpeg";
import gdImg2 from "../../../assets/images/servicesImgs/designImgs/graphicDesignImgs/gd2.jpeg";
import gdImg3 from "../../../assets/images/servicesImgs/designImgs/graphicDesignImgs/gd3.jpeg";
import gdImg4 from "../../../assets/images/servicesImgs/designImgs/graphicDesignImgs/gd4.jpeg";

import gdpImg from "../../../assets/images/servicesImgs/designImgs/graphicDesignImgs/gdp.jpg";

const GraphicDesign = () => {
  const title =
    "Bring your brand to life with impactful and modern graphic design";
  const desc =
    "As a full-service digital agency, we deliver high-quality visuals—from branding to marketing assets—that resonate with your audience and elevate your brand identity.";

  const smdesc = "Graphic Design";

  const [selectedProject, setSelectedProject] = useState("demo1");

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="graphicDesign">
      <SEO
        title="Graphic Design Services | Star Marketing - Logos, Branding & Creatives India & UK"
        description="Star Marketing delivers professional graphic design solutions including logo creation, brand identity, social media creatives, brochures, and banners. Serving businesses in India and the UK with impactful visual storytelling."
        keywords="graphic design India, branding design UK, logo design, social media creatives, visual branding, brochure design, flyer design, poster design, creative agency India, london graphic designers, mumbai design agency, brand identity design"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="graphicDesign-content">
        <ServiceSlider serviceData={graphicServiceData} />
      </div>

      <div className="graphicDesign-works">
        <div className="graphicDesign-works-container">
          <div className="graphicDesign-works-top">
            <button
              className={selectedProject === "demo1" ? "active" : ""}
              onClick={() => setSelectedProject("demo1")}
            >
              Demo 1
            </button>
            <button
              className={selectedProject === "demo2" ? "active" : ""}
              onClick={() => setSelectedProject("demo2")}
            >
              Demo 2
            </button>
            <button
              className={selectedProject === "demo3" ? "active" : ""}
              onClick={() => setSelectedProject("demo3")}
            >
              Demo 3
            </button>
            <button
              className={selectedProject === "demo4" ? "active" : ""}
              onClick={() => setSelectedProject("demo4")}
            >
              Demo 4
            </button>
          </div>

          <div className="graphicDesign-works-cards">
            {selectedProject === "demo1" && (
              <img src={gdImg1} alt="demo-image" loading="lazy" />
            )}

            {selectedProject === "demo2" && (
              <img src={gdImg2} alt="demo-image" loading="lazy" />
            )}

            {selectedProject === "demo3" && (
              <img src={gdImg3} alt="demo-image" loading="lazy" />
            )}
            {selectedProject === "demo4" && (
              <img src={gdImg4} alt="demo-image" loading="lazy" />
            )}
          </div>
        </div>
      </div>

      <div className="graphicDesign-user">
        <div className="graphicDesign-user-container">
          <div className="graphicDesign-user-left">
            <h2>Design That Speaks Your Brand</h2>
            <p>
              Graphic design is more than just aesthetics — it’s a powerful
              communication tool that shapes how your audience perceives your
              brand.
            </p>
            <p>
              From color palettes to typography, every design element plays a
              role in telling your story and influencing user behavior. Our
              graphic designers craft visuals that are not only eye-catching but
              purposeful — aligning with your brand values and resonating with
              your target audience. Whether it’s a logo, marketing material, or
              social media content, we create designs that make a lasting
              impression. We work collaboratively with your team to ensure every
              visual touchpoint is consistent, impactful, and strategically
              designed to elevate your brand.
            </p>
          </div>
          <div className="graphicDesign-user-right">
            <img src={gdpImg} alt="graphic-design-image" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="graphicDesign-partner">
        <BrandCards />
      </div>

      <div className="empty-div"></div>
    </div>
  );
};

export default GraphicDesign;
