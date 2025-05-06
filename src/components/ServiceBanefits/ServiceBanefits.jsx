import "./ServiceBanefits.scss";

const ServiceBanefits = ({ benefitsData }) => {
  return (
    <div className="marketing-strategy">
      <h2>{benefitsData.title}</h2>

      <div className="marketing-strategy-cards">
        {benefitsData.benefitItems.map((item, index) => (
          <div className="marketing-strategy-card" key={index}>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBanefits;
