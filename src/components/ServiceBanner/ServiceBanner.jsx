import "./ServiceBanner.scss";
import serviceBanner from "../../assets/images/service-banner.jpg";


const ServiceBanner = ({ smdesc, title, desc, dot }) => {
 

  return (
    <div className="service-banner">
      <div className="service-top">
        <img src={serviceBanner} alt="service-banner" loading="lazy" />

        <div className="service-banner-desc">
          <span>
            <div className={`dot ${dot}`}></div> {smdesc}
          </span>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
