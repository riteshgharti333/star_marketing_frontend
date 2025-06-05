import "./ServiceBanefits.scss";

const ServiceBanefits = ({ benefitsData, diff }) => {
  return (
    <div className="marketing-strategy">
      {diff === "newService" ? (
        <h2>{benefitsData?.title}</h2>
      ) : (
        <h2>{benefitsData?.title}</h2>
      )}

      {diff === "newService" ? (
        <div className="marketing-strategy-cards">
          {benefitsData?.items?.map((item, index) => (
            <div className="marketing-strategy-card" key={index}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="marketing-strategy-cards">
          {benefitsData.benefitItems.map((item, index) => (
            <div className="marketing-strategy-card" key={index}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceBanefits;
