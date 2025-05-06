import "./Testing.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards } from "../../../assets/data";

import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { testingServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { testingApproachData } from "../../../assets/approachData/devApprochData";
import BrandCards from "../../../components/BrandCards/BrandCards";
import SEO from "../../../components/SEO/SEO";
import { Link, useLocation } from "react-router-dom";

import testImg from "../../../assets/images/servicesImgs/devImgs/testingImgs/test.jpg";

const Testing = () => {
  const title =
    "Ensure flawless performance with thorough and reliable testing";
  const desc =
    "We offer end-to-end testing services—from functionality and usability to performance and security—ensuring your digital products deliver a seamless and bug-free user experience.";
  const smdesc = "Testing";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="testing">
      <SEO
        title="Website & App Testing | Star Marketing - Quality Assurance Experts India & UK"
        description="Ensure flawless user experiences with Star Marketing's comprehensive testing services. We provide website and mobile app testing, QA audits, performance testing, and bug resolution across India and the UK."
        keywords="website testing, app testing, quality assurance, QA services, performance testing, bug fixing, UI/UX testing, QA agency India, UK testing experts"
        url={fullUrl}
      />

      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />

      <div className="testing-top">
        <h2>Custom Testing Solutions for Quality Assurance</h2>
        <p>
          Our tailored testing solutions are designed to ensure your digital
          products meet the highest standards of performance, security, and
          reliability. Unlike off-the-shelf approaches, our testing services are
          customized to align with your unique infrastructure and business
          goals, helping you minimize risk and avoid costly issues post-launch.
        </p>
        <p>
          Whether you're building a website, mobile app, or enterprise platform,
          our team conducts comprehensive testing—from functionality and
          compatibility to load and security testing—ensuring a seamless and
          bug-free experience for your end users. With flexible integration into
          your development process, we support smooth rollouts and long-term
          product stability.
        </p>
      </div>

      <div className="testing-service-slider">
        <ServiceSlider serviceData={testingServiceData} dot="development" />
      </div>

      <Service approachData={testingApproachData} />

      <div className="testing-teams">
        <div className="testing-teams-container">
          <BrandCards />
        </div>
      </div>

      <div className="testing-user">
        <div className="testing-user-left">
          <h2>End-to-End Support for Your Testing Process</h2>
          <p>
            At Star Marketing, we offer comprehensive testing support that goes
            beyond traditional methods. Our team ensures your digital platforms,
            applications, and systems function seamlessly across all user
            scenarios. Whether you're launching a new product or refining an
            existing one, our testing services are designed to deliver
            performance, accuracy, and reliability.
          </p>
          <p>
            Working with us means tapping into a network of over 100 experts
            across design, SEO, video, branding, and more. From user experience
            testing to load and performance analysis, we tailor every solution
            to match your unique business needs—ensuring smooth functionality,
            optimal speed, and complete confidence in every launch.
          </p>

          <Link className="primary-btn" to={"/contact-us"}>
            Your Digital Partner
          </Link>
        </div>
        <div className="testing-user-right">
          <img src={testImg} alt="testing-image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Testing;
