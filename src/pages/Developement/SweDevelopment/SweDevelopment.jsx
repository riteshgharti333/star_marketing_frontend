import "./SweDevelopment.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { aboutCards, graphicCards } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { softwareDevelopmentServiceData } from "../../../assets/serviceSliderData/devSliderData";

import BrandCards from "../../../components/BrandCards/BrandCards";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import sweImg from "../../../assets/images/servicesImgs/devImgs/sweImgs/sweImg.jpg";

const SweDevelopment = () => {
  const title =
    "Custom software solutions built to solve real business challenges";
  const desc =
    "From web apps to enterprise platforms, we develop scalable, secure, and high-performing software tailored to your unique needs and growth goals.";

  const smdesc = "Software Development";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="sweDevelopment">
      <SEO
        title="Software Development Services | Star Marketing - Custom Solutions for Businesses India & UK"
        description="Star Marketing offers end-to-end software development services including SaaS platforms, enterprise software, mobile and desktop apps. Partner with us for scalable and secure software tailored to your business needs across India and the UK."
        keywords="custom software development, SaaS solutions, enterprise software India, software company UK, business software, mobile app development, desktop software, scalable software solutions, software engineers"
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
          serviceData={softwareDevelopmentServiceData}
          dot="development"
        />
      </div>

      <div className="sweDevelopment-user">
        <div className="sweDevelopment-user-left">
          <img src={sweImg} alt="software-development-image" loading="lazy" />
        </div>
        <div className="sweDevelopment-user-right">
          <h2>End-to-End Software Development Solutions</h2>
          <p>
            At Star Marketing, we deliver comprehensive software development
            services tailored to solve complex business challenges. Our expert
            developers work across a variety of languages and platforms,
            including JavaScript, Python, C#, and Ruby, building scalable
            applications with cutting-edge frameworks like React, Node.js, and
            .NET. Whether you're launching a SaaS product, automating
            operations, or creating a custom enterprise tool — we turn your
            vision into functional, future-ready software.
          </p>
          <p>
            Beyond development, we specialise in seamless system integration and
            full API development to ensure all your platforms work together
            harmoniously. Every solution undergoes thorough testing, security
            checks, and performance optimization led by our QA and DevOps
            specialists. From strategy and architecture to launch and
            maintenance, our goal is to deliver reliable, secure, and scalable
            software that empowers your business to grow.
          </p>
        </div>
      </div>

      <div className="sweDevelopment-teams">
        <div className="sweDevelopment-teams-container">
          <BrandCards />
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

export default SweDevelopment;
