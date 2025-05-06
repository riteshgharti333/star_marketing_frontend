import "./Marketing.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { marketingStrategyServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { marketingStrategyApproachData } from "../../../assets/approachData/marketingApproachData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { marketingStrategyServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { marketingBanefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";
import { Link, useLocation } from "react-router-dom";

import SEO from "../../../components/SEO/SEO";

import markImg1 from "../../../assets/images/servicesImgs/marketingImgs/marImgs/mark1.jpg";
import markImg2 from "../../../assets/images/servicesImgs/marketingImgs/marImgs/mark2.jpg";

const Marketing = () => {
  const title = "Strategic marketing that drives growth and maximizes ROI";
  const desc =
    "We craft data-driven marketing strategies tailored to your goals—combining creativity, analytics, and channel expertise to help your brand attract, convert, and retain customers effectively.";

  const smdesc = "Marketing Strategy";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="marketing">
      <SEO
        title="Marketing Strategy Services | Star Marketing - India & UK Experts"
        description="Star Marketing provides data-driven marketing strategy services to help businesses grow. From audience research to campaign planning, we craft powerful strategies for success in India and the UK."
        keywords="marketing strategy, brand strategy, digital marketing plan, campaign planning, audience research, go-to-market strategy, India marketing, UK marketing consultants"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="marketing-top">
        <ServiceSlider serviceData={marketingStrategyServiceData} dot="mark" />
      </div>

      <ServiceBanefits benefitsData={marketingBanefitData} />

      <div className="marketing-user">
        <div className="marketing-user-left">
          <img src={markImg1} alt="marketing-image" loading="lazy" />
        </div>
        <div className="marketing-user-right">
          <h2>Where do we get our marketing insights?</h2>
          <p>
            Our marketing strategies are driven by data from trusted,
            industry-leading platforms such as Google Analytics, SEMrush, and
            Meta Business Suite. We combine both first-party and third-party
            insights to ensure our campaigns are grounded in audience behaviour,
            trends, and performance analytics.
          </p>
          <p>
            All data we use is fully GDPR compliant, and we apply strict
            validation processes to ensure accuracy, relevance, and timeliness.
            This data-centric approach allows us to craft tailored marketing
            strategies that deliver measurable results and long-term impact for
            your brand.
          </p>
        </div>
      </div>

      <Service approachData={marketingStrategyApproachData} />

      <div className="marketing-teams">
        <div className="marketing-teams-container">
          <ServiceOption serviceOption={marketingStrategyServiceOption} />
        </div>
      </div>

      <div className="marketing-service">
        <div className="marketing-service-left">
          <span>
            <div className="dot"></div>Marketing Strategy
          </span>
          <h2>Elevating your brand with tailored marketing strategies</h2>
          <p>
            Our marketing strategy services are designed to help businesses
            navigate the ever-changing digital landscape. We focus on building
            long-term value through targeted audience segmentation, positioning
            analysis, and brand messaging that resonates. Whether you're
            launching a new product, entering a new market, or refining your
            brand voice, our strategic approach ensures your marketing efforts
            deliver measurable impact.
          </p>
          <p>
            At Blue Frontier, we blend creativity with performance data to shape
            strategies that not only attract attention but also drive real
            business growth. From campaign roadmaps to performance forecasting,
            we’re here to guide your next move with confidence.
          </p>

          <Link className="primary-btn" to={"/contact-us"}>
            Get in touch
          </Link>
        </div>
        <div className="marketing-service-right">
          <img src={markImg2} alt="marketing-image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
