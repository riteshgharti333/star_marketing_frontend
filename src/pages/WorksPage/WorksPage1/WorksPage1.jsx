import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import "./WorksPage1.scss";

import work_img1 from "../../../assets/images/workImgs/work_img1.jpg";
import work_img2 from "../../../assets/images/workImgs/work_img2.jpg";
import work_img3 from "../../../assets/images/workImgs/work_img3.jpg";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";



const WorksPage1 = () => {
  const title =
    "How a Website Can Empower Your Business, Education, and Travel Goals";
  const desc =
    "Discover how a well-crafted website can drive business growth, enable effective online learning, and simplify travel planning—by providing accessibility, automation, and personalized user experiences across industries.";

  const smdesc = "How it works?";

  const location = useLocation();
const baseUrl =
  import.meta.env.VITE_BASE_URL || "https://www.wingstarnarketing.com";
const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="workspage1">
      <SEO
        title="How a Website Empowers Business, Education & Travel | Star Marketing"
        description="Discover how a website can transform your business, enhance education delivery, and drive travel success. Star Marketing builds result-driven websites for real growth in every industry."
        keywords="business website, education website, travel website, website for business, e-learning website, travel agency website, online branding, digital presence, website benefits, Star Marketing"
        url={fullUrl}
      />
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="work" />

      <div className="workspage1-desc">
        <p>
          In today’s digital age, having a website isn’t just an option—it’s a
          necessity. Whether you’re running a business, offering training and
          education, or managing travel services, a website helps you reach more
          people, build trust, and grow your brand. At Star Marketing, we help
          you build a strong online presence that delivers real results.
        </p>
      </div>

      <div className="workspage1-user">
        <div className="workspage1-user-left">
          <h2>Websites in Business: Build and Grow Your Brand</h2>
          <p>
            A professional website acts as your digital storefront—open 24/7. It
            helps you:
          </p>

          <ul>
            <li>Showcase your products and services</li>
            <li>Collect leads and customer inquiries</li>
            <li>
              Build credibility with reviews, portfolios, and testimonials
            </li>
            <li>Run marketing campaigns and promotions</li>
            <li>Accept online payments or bookings</li>
          </ul>

          <p className="example-desc">
            Example: A small real estate business can list properties, gather
            client details, and even schedule property visits—all through a
            website.
          </p>
        </div>
        <div className="workspage1-user-right">
          <img src={work_img1} alt="" />
        </div>
      </div>

      <div className="workspage1-user work-desc2">
        <div className="workspage1-user-left">
          <h2>Websites in Education and Training: Teach and Inspire</h2>
          <p>
            With e-learning on the rise, your website can become a virtual
            classroom:
          </p>
          <ul>
            <li>Offer online courses and workshops</li>
            <li>
              Provide video tutorials, quizzes, and downloadable materials
            </li>
            <li>Manage student registrations and track progress</li>
            <li>Build a learning community</li>
          </ul>

          <p className="example-desc">
            Example: A coaching institute can manage its entire learning system
            online, increasing reach and reducing operational cost.
          </p>
        </div>
        <div className="workspage1-user-right">
          <img src={work_img2} alt="" />
        </div>
      </div>

      <div className="workspage1-user">
        <div className="workspage1-user-left">
          <h2>Websites in Travel: Inspire and Convert</h2>
          <p>
            The travel industry thrives on inspiration and convenience. A
            website helps you:
          </p>
          <ul>
            <li>Display destinations with photos, videos, and itineraries</li>
            <li>Allow online booking and payment</li>
            <li>Share travel tips and blogs</li>
            <li>Collect feedback and testimonials</li>
          </ul>

          <p className="example-desc">
            Example: A travel agency can show packages, accept bookings, and
            provide instant customer support—all from one place.
          </p>
        </div>
        <div className="workspage1-user-right">
          <img src={work_img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorksPage1;
