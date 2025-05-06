import "./ECommerce.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards, graphicCards } from "../../../assets/data";

import { GoDotFill } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { ecommerceServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { ecommerceDevelopmentApproachData } from "../../../assets/approachData/devApprochData";
import BrandCards from "../../../components/BrandCards/BrandCards";
import SEO from "../../../components/SEO/SEO";
import { Link, useLocation } from "react-router-dom";

import ecImg from "../../../assets/images/servicesImgs/devImgs/ecImgs/ecImg.jpg";

const ECommerce = () => {
  const title =
    "Launch high-converting eCommerce platforms that drive sales and scale";
  const desc =
    "We build seamless, secure, and user-friendly online stores optimized for performance—designed to grow your brand and deliver a smooth shopping experience across all devices.";

  const smdesc = "Custom eCommerce Development";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="eCommerce">
      <SEO
        title="E-commerce Development | Star Marketing - Scalable Online Stores for India & UK"
        description="Star Marketing builds powerful, scalable e-commerce websites tailored to your brand. From Shopify to custom solutions, we deliver conversion-focused online stores for businesses in India and the UK."
        keywords="ecommerce website development, Shopify experts India, WooCommerce stores, online shop design, ecommerce developers UK, custom online store, scalable ecommerce platform, ecommerce UX design"
        url={fullUrl}
      />

      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />

      <div className="eCommerce-top">
        <h2>Future-Ready eCommerce Solutions</h2>
        <p>
          At Star Marketing, we craft custom eCommerce experiences designed to
          drive sales, streamline operations, and scale with your business. Our
          bespoke platforms go beyond cookie-cutter templates — we develop
          purpose-built online stores that reflect your brand, connect
          seamlessly with your backend systems, and deliver a frictionless
          shopping journey for your customers.
        </p>
        <p>
          From secure payment gateway integration to inventory management and
          personalised user flows, every element is engineered for performance
          and conversion. Whether you're launching a D2C brand or expanding B2B
          sales online, our eCommerce solutions give you the agility and control
          needed to thrive in a fast-evolving digital marketplace.
        </p>
      </div>

      <div className="eCommerce-service-slider">
        <ServiceSlider serviceData={ecommerceServiceData} dot="development" />
      </div>

      <Service approachData={ecommerceDevelopmentApproachData} />

      <div className="eCommerce-teams">
        <div className="eCommerce-teams-container">
          <BrandCards />
        </div>
      </div>

      <div className="eCommerce-user">
        <div className="eCommerce-user-left">
          <h2>Holistic eCommerce Support for Sustainable Growth</h2>
          <p>
            At Star Marketing, we don’t just build eCommerce websites — we
            become your long-term growth partner. Our holistic approach means we
            support your business at every stage, from intuitive UX design and
            mobile app development to brand identity, performance marketing, and
            beyond.
          </p>
          <p>
            Our cross-functional team brings together specialists in eCommerce
            SEO, paid media, graphic design, content marketing, and analytics to
            create a powerful ecosystem around your store. With our end-to-end
            support, your business gains the digital edge it needs to thrive in
            a competitive market.
          </p>

          <Link className="primary-btn" to={"/contact-us"}>
            Your Digital Partner
          </Link>
        </div>
        <div className="eCommerce-user-right">
          <img src={ecImg} alt="e-commerce-image" loading="lazy" />
        </div>
      </div>

      <div className="eCommerce-btn">
        <Link className="primary-btn" to={"/contact-us"}>
          View all work
        </Link>
      </div>
    </div>
  );
};

export default ECommerce;
