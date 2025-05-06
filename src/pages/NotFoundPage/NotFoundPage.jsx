import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Star Marketing";
  }, []);

  return (
    <div className="digital-agency-404">
      {/* Animated Background */}
      <div className="digital-bg">
        <div className="circuit-overlay"></div>
        <div className="floating-grid"></div>
      </div>

      {/* Main Content */}
      <div className="error-container">
        <div className="error-code">
          <span className="digit">4</span>
          <div className="zero">
            <div className="inner-globe"></div>
            <span>0</span>
          </div>
          <span className="digit">4</span>
        </div>

        <h1>Page Not Found</h1>
        <p className="subtitle">
          Sorry, we couldn’t find that page.
          <br />
          Let’s head back home and try again.
        </p>

        <Link to="/" className="cta-button">
          <span>Back to Home</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Floating UI Elements (Digital Theme) */}
      <div className="floating-shapes">
        <div className="shape hexagon"></div>
        <div className="shape triangle"></div>
        <div className="shape circle"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
