import "./WebDevelopment.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { graphicCards } from "../../../assets/data";

import { GoDotFill } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { webDevelopmentServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { webDevelopmentApproachData } from "../../../assets/approachData/devApprochData";
import { webParagraphData } from "../../../assets/paraData/paraData";

import BrandCards from "../../../components/BrandCards/BrandCards";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import wdImg from "../../../assets/images/servicesImgs/devImgs/webDevImgs/wdImg1.jpg";

const WebDevelopment = () => {
  const title =
    "Build fast, scalable websites that turn ideas into digital experiences";
  const desc =
    "We develop high-performance, responsive websites using modern technologies—engineered to grow with your business and deliver seamless user experiences.";

  const smdesc = "Web Development Solutions";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="webDevelopment">
      <SEO
        title="Web Development Services | Star Marketing - Scalable Websites & Web Apps India & UK"
        description="Star Marketing delivers high-performance web development services including responsive websites, custom web applications, CMS integration, and e-commerce solutions. Trusted by brands in India and the UK for digital transformation."
        keywords="web development India, custom website UK, responsive websites, e-commerce development, CMS solutions, frontend backend development, scalable web apps, website development company, professional web developers"
        url={fullUrl}
      />

      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />
      <div className="development-top">
        <ServiceSlider
          serviceData={webDevelopmentServiceData}
          dot="development"
        />
      </div>

      <Service approachData={webDevelopmentApproachData} />

      <div className="webDevelopment-teams">
        <div className="webDevelopment-teams-container">
          <BrandCards />
        </div>
      </div>

      <div className="webDevelopment-user">
        <div className="webDevelopment-user-left">
          <img src={wdImg} alt="web-image" loading="lazy" />
        </div>
        <div className="webDevelopment-user-right">
          <h2>{webParagraphData.title}</h2>

          <ul>
            {webParagraphData.paragraphDataItems.map((item, index) => (
              <li key={index}>
                <GoDotFill className="dev-icon" />
                <p>
                  <span>{item.title} : </span>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
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

export default WebDevelopment;
