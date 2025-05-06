import "./Advertising.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { paidAdvertisingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { paidAdvertisingApproachData } from "../../../assets/approachData/marketingApproachData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { paidAdvertisingServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { paidAdvertisingBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import adImg from "../../../assets/images/servicesImgs/marketingImgs/advertisingImgs/adImg.jpg";

const Advertising = () => {
  const title = "Maximize your ROI with data-driven paid advertising campaigns";
  const desc =
    "We create and manage targeted ad strategies across Google, Meta, and more—designed to attract the right audience, increase conversions, and scale your growth efficiently.";

  const smdesc = "Paid Advertising";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="advertising">
      <SEO
        title="Paid Advertising Services | Star Marketing - PPC Experts India & UK"
        description="Maximize your ROI with Star Marketing’s expert paid advertising solutions. We manage Google Ads, Facebook Ads, Instagram Ads, and more to drive targeted traffic in India & the UK."
        keywords="paid advertising, PPC services, Google Ads, Facebook Ads, Instagram Ads, online advertising, digital ads India, paid marketing UK, advertising agency"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="advertising-top">
        <ServiceSlider serviceData={paidAdvertisingServiceData} dot="mark" />
      </div>

      <ServiceBanefits benefitsData={paidAdvertisingBenefitData} />

      <div className="advertising-approach">
        <div className="advertising-approach-left">
          <img src={adImg} alt="marketing-image" loading="lazy" />
        </div>
        <div className="advertising-approach-right">
          <h2>How do we drive our paid advertising strategies?</h2>
          <p>
            Our paid advertising strategies are powered by data from top-tier ad
            platforms and analytics tools, including Google Ads, Meta Business
            Suite, and programmatic networks. By utilizing both first-party and
            third-party insights, we craft targeted campaigns that maximize ROI
            and reach the right audience at the right time.
          </p>
          <p>
            Every campaign is built on a foundation of accurate, GDPR-compliant
            data. Our specialists continuously monitor performance metrics, A/B
            testing results, and audience behaviors to refine and optimize your
            ads. This ensures your budget is spent efficiently while driving
            measurable results across search, social, and display networks.
          </p>
        </div>
      </div>

      <div className="advertising-user">
        <div className="advertising-user-left">
          <h2>Why is paid advertising so important?</h2>
        </div>
        <div className="advertising-user-right">
          <div className="advertising-user-right-items">
            <div className="advertising-user-right-item">
              <h2>30%</h2>
              <p>
                Average click-through-rate for the first organic result on
                Google
              </p>
            </div>

            <div className="advertising-user-right-item">
              <h2>60%</h2>
              <p>
                Average click-through-rate for the first organic result on
                Google
              </p>
            </div>

            <div className="advertising-user-right-item">
              <h2>70%</h2>
              <p>
                Average click-through-rate for the first organic result on
                Google
              </p>
            </div>
          </div>
        </div>
      </div>

      <Service approachData={paidAdvertisingApproachData} />

      <div className="advertising-teams">
        <div className="advertising-teams-container">
          <ServiceOption serviceOption={paidAdvertisingServiceOption} />
        </div>
      </div>
      <div className="marketing-empty"></div>
    </div>
  );
};

export default Advertising;
