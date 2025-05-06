import "./AppDevelopement.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards, chooseData } from "../../../assets/data";

import { useState } from "react";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { appDevelopmentServiceData } from "../../../assets/serviceSliderData/devSliderData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { appServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import BrandCards from "../../../components/BrandCards/BrandCards";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import adImg from "../../../assets/images/servicesImgs/devImgs/appDevImgs/ad.jpg";
import adImg2 from "../../../assets/images/servicesImgs/devImgs/appDevImgs/ad2.jpg";

const AppDevelopement = () => {
  const title = "Turn your vision into powerful mobile apps that users love";
  const desc =
    "We design and develop intuitive, high-performance mobile applications for iOS and Android—built to engage users and scale with your business goals.";

  const smdesc = "Mobile App Development";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="appDevelopement">
      <SEO
        title="App Development | Star Marketing - Android & iOS Solutions for India & UK"
        description="Star Marketing offers cutting-edge mobile app development services for Android and iOS platforms. We build performance-driven, user-friendly apps tailored to your business needs across India and the UK."
        keywords="mobile app development, android app development, iOS app developers, cross-platform apps, custom mobile solutions, app development India, UK mobile app agency, business apps"
        url={fullUrl}
      />

      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />

      <div className="appDevelopement-top">
        <h2>Custom App Development Solutions</h2>
        <p>
          A tailored mobile application empowers businesses to meet their unique
          operational needs while delivering exceptional user experiences.
          Unlike off-the-shelf apps, custom solutions offer full control over
          functionality, user flows, system integration, and performance. This
          flexibility ensures your app scales seamlessly as your business grows.
        </p>
        <p>
          That’s where we come in. At Star Marketing, our skilled app developers
          craft powerful iOS and Android applications designed specifically for
          your goals. Leveraging technologies like React Native, Flutter, and
          .NET MAUI, we build fast, reliable, and user-focused mobile
          experiences that drive engagement and long-term value.
        </p>
      </div>

      <div className="appDevelopement-service-slider">
        <ServiceSlider
          serviceData={appDevelopmentServiceData}
          dot="development"
        />
      </div>

      <div className="appDevelopement-quality">
        <div className="appDevelopement-quality-left">
          <img src={adImg} alt="app-dev-image" loading="lazy" />
        </div>

        <div className="appDevelopement-quality-right">
          <h2>Driven by Excellence at Every Step</h2>
          <p>
            At Star Marketing, we don’t just build apps — we craft digital
            experiences that are user-driven and business-focused. Our
            development process is transparent and collaborative, keeping you
            involved from wireframes to final launch. Your insights help us
            shape a product that’s intuitive, powerful, and perfectly aligned
            with your goals.
          </p>
          <p>
            Every line of code is written with precision. Backed by a certified
            Quality Management System (QMS), we conduct rigorous testing,
            performance checks, and quality assurance to ensure your app
            launches bug-free, secure, and ready to scale. It’s not just about
            building apps — it’s about delivering excellence.
          </p>
        </div>
      </div>

      <div className="appDevelopement-teams">
        <div className="appDevelopement-teams-container">
          <ServiceOption serviceOption={appServiceOption} />

          <BrandCards />
        </div>
      </div>

      <div className="appDevelopement-user">
        <div className="appDevelopement-user-left">
          <h2>End-to-End Support for Your App Development Journey</h2>
          <p>
            At Star Marketing, we don’t stop at building apps — we provide
            comprehensive, long-term support to help your digital product
            succeed in the market. As a full-spectrum digital agency, we offer
            strategic services beyond development, including branding,
            marketing, and user acquisition support.
          </p>
          <p>
            Curious about how our holistic, collaborative approach sets us
            apart? Visit our Digital Partner page to explore how we drive
            lasting impact.
          </p>

          <Link className="primary-btn" to={"/contact-us"}>
            Your Digital Partner
          </Link>
        </div>
        <div className="appDevelopement-user-right">
          <img src={adImg2} alt="app-dev-image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default AppDevelopement;
