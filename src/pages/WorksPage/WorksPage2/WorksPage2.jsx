import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import "./WorksPage2.scss";

import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { howitWorkdata, workBanefitData } from "../../../assets/workData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

const WorksPage2 = () => {
  const title = "How Social Media Can Solve the Lead Generation Problem";
  const desc =
    "At Star Marketing, we help businesses like yours use social platforms strategically to turn followers into loyal customers.";

  const smdesc = "How it works?";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarnarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="worksPage2">
      <SEO
        title="Lead Generation with Social Media | Star Marketing Solutions"
        description="Struggling to generate quality leads? Discover how social media marketing can drive results with targeting, engagement, and conversion strategies."
        keywords="social media lead generation, Facebook ads, Instagram marketing, generate leads online, WhatsApp marketing, business growth, Star Marketing"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="work" />

      <div className="worksPage2-desc">
        <p>
          Generating quality leads is one of the biggest challenges for any
          business. Traditional methods like cold calling and email blasts often
          fall short. That’s where social media comes in—a powerful and
          cost-effective way to attract, engage, and convert potential
          customers.
        </p>
      </div>

      <div className="work-teams">
        <div className="work-teams-container">
          <ServiceOption serviceOption={howitWorkdata} />
        </div>
      </div>

      <ServiceBanefits benefitsData={workBanefitData} />

      <div className="worksPage2-last-desc">
        <p>Real Example: How Star Marketing Generates Leads</p>
        <p>
          One of our clients, a real estate agent, increased leads by{" "}
          <span className="big-per"> 300</span>% in one month using Facebook and
          WhatsApp campaigns we created. By combining visual ads with targeted
          messaging, we helped them turn social followers into real buyers.
        </p>
      </div>
    </div>
  );
};

export default WorksPage2;
