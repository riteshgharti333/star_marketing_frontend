import "./About.scss";

import AboutBanner from "../../components/AboutComp/AboutBanner/AboutBanner";
import AboutCulture from "../../components/AboutComp/AboutCulture/AboutCulture";
import AboutMission from "../../components/AboutComp/AboutMission/AboutMission";
import AboutPeople from "../../components/AboutComp/AboutPeople/AboutPeople";
import AboutSlider from "../../components/AboutComp/AboutSlider/AboutSlider";
import Choose from "../../components/AboutComp/Choose/Choose";
import Story from "../../components/AboutComp/Story/Story";
import { useLocation } from "react-router-dom";
import SEO from "../../components/SEO/SEO";

const About = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="about">
      <SEO
        title="About Us | Star Marketing Marketing - Digital Marketing Experts India & UK"
        description="Learn more about Star Marketing — a results-driven digital marketing agency providing expert SEO, branding, web development, and advertising solutions across India and the UK."
        keywords="about Star marketing, marketing team, seo experts, web developers, branding professionals, digital agency india, digital agency UK, marketing story"
        url={fullUrl}
      />

      <AboutBanner />
      <Story />
      <AboutSlider />
      <AboutMission />
      <Choose />
      <AboutCulture />
      <AboutPeople />
      <div className="about-empty"></div>
    </div>
  );
};

export default About;
