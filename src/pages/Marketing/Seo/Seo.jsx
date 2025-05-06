import "./Seo.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { seoServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { seoApproachData } from "../../../assets/approachData/marketingApproachData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { seoServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { seoBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";
import SEO from "../../../components/SEO/SEO";
import { useLocation } from "react-router-dom";

import seoImg1 from "../../../assets/images/servicesImgs/marketingImgs/seoImgs/seoImg.jpg";

const Seo = () => {
  const title =
    "Boost your visibility and rank higher with powerful SEO strategies";
  const desc =
    "From technical audits to content optimization, we deliver tailored SEO solutions that drive organic traffic, improve search rankings, and generate long-term results for your business.";

  const smdesc = "SEO Service";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="seo">
      <SEO
        title="SEO Services | Star Marketing - Rank Higher in India & UK"
        description="Boost your online visibility with Star Marketing's expert SEO services. We offer on-page SEO, off-page SEO, technical SEO, and local SEO tailored for businesses in India and the UK."
        keywords="SEO services, on-page SEO, off-page SEO, technical SEO, local SEO, search engine optimization, SEO agency India, SEO company UK, rank higher on Google"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="seo-top">
        <ServiceSlider serviceData={seoServiceData} dot="mark" />
      </div>

      <ServiceBanefits benefitsData={seoBenefitData} />

      <div className="seo-user">
        <div className="seo-user-left">
          <img src={seoImg1} alt="seo-image" loading="lazy" />
        </div>
        <div className="seo-user-right">
          <div className="seo-user-right-items">
            <div className="seo-user-right-item">
              <h2>30%+</h2>
              <p>
                Average click-through-rate for the first organic result on
                Google
              </p>
            </div>

            <div className="seo-user-right-item">
              <h2>60%+</h2>
              <p>
                Average click-through-rate for the first organic result on
                Google
              </p>
            </div>

            <div className="seo-user-right-item">
              <h2>70%+</h2>
              <p>
                Average click-through-rate for the first organic result on
                Google
              </p>
            </div>
          </div>
        </div>
      </div>

      <Service approachData={seoApproachData} />

      <div className="seo-teams">
        <div className="seo-teams-container">
          <ServiceOption serviceOption={seoServiceOption} />
        </div>
      </div>
      <div className="marketing-empty"></div>
    </div>
  );
};

export default Seo;
