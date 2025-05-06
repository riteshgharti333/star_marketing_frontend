import "./Cro.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

import { FaArrowUpLong } from "react-icons/fa6";
import { croServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { croApproachData } from "../../../assets/approachData/marketingApproachData";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import croImg from "../../../assets/images/servicesImgs/marketingImgs/reportingImgs/croImg.jpg";

const Cro = () => {
  const title =
    "Turn traffic into revenue with smart conversion rate optimization";
  const desc =
    "We analyze user behavior, test strategically, and optimize every element of your digital experience—boosting conversions, lowering bounce rates, and increasing ROI without increasing ad spend.";

  const smdesc = "Conversion Rate Optimisiation";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="cro">
      <SEO
        title="Conversion Rate Optimisation (CRO) Services | Star Marketing - India & UK"
        description="Maximize your website's potential with Star Marketing’s CRO services. We optimize user experience, design, and funnels to convert more visitors into loyal customers across India and the UK."
        keywords="conversion rate optimisation, CRO services, boost conversions, website optimization, UX design, landing page optimization, digital growth, India CRO, UK marketing agency"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="cro-top">
        <ServiceSlider serviceData={croServiceData} dot="mark" />
      </div>

      <div className="cro-approach">
        <div className="cro-approach-left">
          <img src={croImg} alt="cro-image" loading="lazy" />
        </div>
        <div className="cro-approach-right">
          <h2>Why CRO marketing matters</h2>
          <p>
            CRO plays a vital role in maximizing the value of your website
            traffic. Whether your goal is to increase sales, generate leads, or
            encourage user actions, conversion rate optimization ensures your
            site is working smarter to achieve results.
          </p>
          <p>
            Successful CRO is driven by insights, user behavior patterns, and
            continuous testing. Our team focuses on understanding how users
            interact with your site and uses that knowledge to fine-tune key
            elements for better performance and higher conversions.
          </p>
          <p>
            From refining landing pages and improving call-to-actions to
            simplifying user journeys, we deliver customized CRO strategies that
            support your growth. We also revisit existing pages to uncover
            hidden opportunities for better engagement and improved results.
          </p>
        </div>
      </div>

      <div className="cro-user">
        <div className="cro-user-left">
          <h2>The impact of CRO</h2>
          <p>
            If you're looking to grow your business by increasing sales and
            revenue, then conversion rate optimisation is a crucial step to
            success.
          </p>
        </div>
        <div className="cro-user-right">
          <div className="cro-user-right-items">
            <div className="cro-user-right-item">
              <h2>
                30% <FaArrowUpLong className="up-arrow" />
              </h2>
              <p>billion active social media users in 2024</p>
            </div>

            <div className="cro-user-right-item">
              <h2>
                60% <FaArrowUpLong className="up-arrow" />
              </h2>
              <p>
                different social media platforms used per person (on average)
              </p>
            </div>

            <div className="cro-user-right-item">
              <h2>
                90% <FaArrowUpLong className="up-arrow" />
              </h2>
              <p>billion monthly active users on Facebook in 2024</p>
            </div>
          </div>
        </div>
      </div>

      <Service approachData={croApproachData} />

      <div className="empty-div" style={{ paddingTop: "100px" }}></div>
    </div>
  );
};

export default Cro;
