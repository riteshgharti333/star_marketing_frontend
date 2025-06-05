import "./NewPageService.scss";

import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../components/ServiceSlider/ServiceSlider";
import Service from "../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { marketingStrategyServiceData } from "../../assets/serviceSliderData/markSliderData";
import { marketingStrategyApproachData } from "../../assets/approachData/marketingApproachData";
import ServiceOption from "../../components/ServiceOption/ServiceOption";
import { marketingStrategyServiceOption } from "../../assets/serviceOptionData/serviceOptionData";
import ServiceBanefits from "../../components/ServiceBanefits/ServiceBanefits";
import { marketingBanefitData } from "../../assets/serviceBenefitData/serviceBenefitData";
import { Link, useLocation, useParams } from "react-router-dom";

import SEO from "../../components/SEO/SEO";

import markImg1 from "../../assets/images/servicesImgs/marketingImgs/marImgs/mark1.jpg";
import markImg2 from "../../assets/images/servicesImgs/marketingImgs/marImgs/mark2.jpg";

import { baseUrl } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchService = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(`${baseUrl}/service/${id}`);
  console.log(data);
  return data?.service;
};

const NewPageService = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["service", id],
    queryFn: fetchService,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  if (isError) {
    console.log("🔴 Error Object:", error);
    if (error.name === "AxiosError") {
      const isNetworkError =
        !error.response ||
        error.message.includes("ECONNRESET") ||
        error.response?.data?.message === "read ECONNRESET";

      if (isNetworkError) {
        setTimeout(() => {
          toast.error("🚫 Network error. Please check your connection.");
        }, 100);
      } else {
        console.error("❗ Server Error:", error.response?.status);
      }
    }
  }

  if (isLoading) {
    <Loader />;
  }

  if (isError) {
    return (
      <div className="error">
        <div className="error-desc">
          <h3>❌ Failed to page</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

  const title = data?.bannerSection?.bannerTitle;
  const desc = data?.bannerSection?.bannerDesc;

  const smdesc = data?.bannerSection?.serviceName;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  // const { strategy, benefits, howItWorks, contentSection } =
  // data;

  return (
    <div className="marketing">
      <SEO
        title="Marketing Strategy Services | Star Marketing - India & UK Experts"
        description="Star Marketing provides data-driven marketing strategy services to help businesses grow. From audience research to campaign planning, we craft powerful strategies for success in India and the UK."
        keywords="marketing strategy, brand strategy, digital marketing plan, campaign planning, audience research, go-to-market strategy, India marketing, UK marketing consultants"
        url={fullUrl}
      />

      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot={
          data?.selectedService === "marketing"
            ? "mark"
            : data?.selectedService === "development"
            ? "development"
            : ""
        }
        newServiceBanner={data?.bannerSection?.bannerImage}
      />

      <div className="marketing-top">
        <ServiceSlider
          serviceData={data?.strategy}
          dot={
            data?.selectedService === "marketing"
              ? "mark"
              : data?.selectedService === "development"
              ? "development"
              : ""
          }
          diff="newService"
        />
      </div>

      <ServiceBanefits benefitsData={data?.benefits} diff="newService" />

      <div className="marketing-teams">
        <div className="marketing-teams-container">
          <ServiceOption serviceOption={data?.howItWorks} diff="newService" />
        </div>
      </div>

      <div className="marketing-service">
        <div className="marketing-service-left">
          <h2>{data?.contentSection?.title}</h2>
          <p>{data?.contentSection?.desc}</p>
        </div>
        <div className="marketing-service-right">
          <img
            src={data?.contentSection?.image}
            alt="marketing-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default NewPageService;
