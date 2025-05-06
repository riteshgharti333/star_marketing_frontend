import "./Holistic.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { holisticMarketingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { holisticMarketingServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { holisticMarketingBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import hm from "../../../assets/images/servicesImgs/marketingImgs/holisticImgs/hm.jpg";

const Holistic = () => {
  const title =
    "Connect every touchpoint with a unified holistic marketing approach";
  const desc =
    "We align your brand’s messaging, channels, and customer experience into one cohesive strategy—driving deeper engagement, stronger loyalty, and sustainable growth across all platforms.";

  const smdesc = "Holistic Marketing";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="holistic">
      <SEO
        title="Holistic Marketing Services | Star Marketing - 360° Branding & Growth"
        description="Star Marketing delivers holistic marketing solutions that unify SEO, branding, social media, and content strategies for impactful and sustainable business growth across India and the UK."
        keywords="holistic marketing, 360 marketing, integrated marketing strategy, branding and SEO, complete digital strategy, India marketing agency, UK digital growth"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="holistic-top">
        <ServiceSlider serviceData={holisticMarketingServiceData} dot="mark" />
      </div>

      <ServiceBanefits benefitsData={holisticMarketingBenefitData} />

      <div className="holistic-user">
        <div className="holistic-user-left">
          <img src={hm} alt="holistic-image" loading="lazy" />
        </div>
        <div className="holistic-user-right">
          <h2>How do we power our holistic marketing approach?</h2>
          <p>
            Our holistic marketing strategies are built on a deep understanding
            of consumer behavior, market trends, and brand positioning. We
            leverage insights from multiple trusted data platforms and marketing
            analytics tools to create unified, impactful campaigns across all
            channels. This ensures every element — from SEO to social media to
            offline touchpoints — works together seamlessly to support your
            business goals.
          </p>
          <p>
            With a commitment to transparency and data integrity, our team
            ensures all marketing insights are derived from ethically sourced,
            GDPR-compliant data. Every recommendation we make is backed by
            real-time analytics, behavioral research, and industry benchmarks to
            give you confidence in both the strategy and the results.
          </p>
        </div>
      </div>

      <div className="holistic-teams">
        <div className="holistic-teams-container">
          <ServiceOption serviceOption={holisticMarketingServiceOption} />
        </div>
      </div>
      <div className="holistic-empty"></div>
    </div>
  );
};

export default Holistic;
