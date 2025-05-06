import { useEffect, useState } from "react";
import "./CurtainLoader.scss";
import logo from "../../assets/images/logo.png";

const CurtainLoader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div className="curtain-loader">
      <div className="light-sweep"></div>
      <div className="curtain-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="curtain-logo" />
          <div className="logo-aura"></div>
        </div>
        <div className="loading-indicator">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default CurtainLoader;
