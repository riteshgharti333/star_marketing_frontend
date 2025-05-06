import "./Content.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { contentMarketingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { contentMarketingApproachData } from "../../../assets/approachData/marketingApproachData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { contentMarketingServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import SEO from "../../../components/SEO/SEO";
import { useLocation } from "react-router-dom";

import cImg1 from "../../../assets/images/servicesImgs/marketingImgs/contentImgs/contentImg.jpg";
import cImg2 from "../../../assets/images/servicesImgs/marketingImgs/contentImgs/contentImg2.jpg";

const Content = () => {
  const title =
    "Fuel your brand with strategic content that informs, engages, and converts";
  const desc =
    "As a content marketing agency, we create high-impact blogs, videos, and campaigns tailored to your audience—driving organic growth, building authority, and boosting customer loyalty across every channel.";

  const smdesc = "Content Marketing Agency";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="content">
      <SEO
        title="Content Marketing Services | Star Marketing - India & UK"
        description="Star Marketing crafts powerful content strategies to boost engagement, drive traffic, and convert leads. From blogs to branded content, we help your business grow with words that work."
        keywords="content marketing, blog writing, content strategy, branded content, digital storytelling, SEO content, marketing agency India, UK content experts"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="content-top">
        <ServiceSlider serviceData={contentMarketingServiceData} dot="mark" />
      </div>

      <div className="content-approach">
        <div className="content-approach-left">
          <img src={cImg2} alt="content-image" loading="lazy" />
        </div>
        <div className="content-approach-right">
          <h2>The power of content marketing</h2>
          <p>
            Content sits at the heart of every successful marketing strategy.
            Whether you're aiming to boost your social media engagement,
            strengthen your SEO efforts, or educate your audience, great content
            drives meaningful connections.
          </p>
          <p>
            Effective content doesn’t happen by chance — it’s backed by
            research, strategy, and a deep understanding of your audience’s
            needs. Our team crafts data-driven content plans built on keyword
            analysis, competitive insights, and user intent to ensure your
            message lands where it matters most.
          </p>
          <p>
            From blog articles and website copy to social media posts,
            brochures, and more, we produce high-quality, original content
            tailored to your brand. We can also help refine and optimise your
            existing content to unlock hidden SEO opportunities and enhance
            overall performance.
          </p>
        </div>
      </div>

      <div className="content-statics">
        <div className="content-statics-left">
          <h2>Content marketing statistics</h2>
          <p>
            Whatever your business goals and marketing tactics are, content is
            always at the centre. Without content your audience will have
            nothing to see, watch, or read, and yet the creation of high-value
            content can often become an afterthought. Having a clear,
            attainable, and data-driven strategy that allows your business to
            publish valuable content regularly can help skyrocket your marketing
            performance and hit your wider goals.
          </p>
        </div>
        <div className="content-statics-right">
          <div className="content-statics-right-items">
            <div className="content-statics-right-item">
              <h2>30%</h2>
              <p>billion active social media users in 2024</p>
            </div>

            <div className="content-statics-right-item">
              <h2>60%</h2>
              <p>
                different social media platforms used per person (on average)
              </p>
            </div>

            <div className="content-statics-right-item">
              <h2>90%</h2>
              <p>billion monthly active users on Facebook in 2024</p>
            </div>
          </div>
        </div>
      </div>

      <Service approachData={contentMarketingApproachData} />

      <div className="content-teams">
        <div className="content-teams-container">
          <ServiceOption serviceOption={contentMarketingServiceOption} />
        </div>
      </div>

      <div className="content-user">
        <div className="content-user-left">
          <h2>Strategic content that drives impact</h2>
          <p>
            Achieving success with content marketing means more than simply
            creating content — it requires a well-planned, data-driven strategy
            that spans multiple channels. From whitepapers and guest articles to
            video content and podcasts, we help you engage the right audiences
            at every touchpoint.
          </p>
          <p>
            We collaborate closely with your team to ensure your content
            strategy aligns with your business goals—whether it’s increasing
            brand visibility, generating leads, or establishing thought
            leadership. Our approach blends in-depth market research, creative
            content development, and intelligent distribution backed by
            cutting-edge tools and AI-powered insights to maximise your reach
            and return on investment.
          </p>
        </div>
        <div className="content-user-right">
          <img src={cImg1} alt="content-image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Content;
