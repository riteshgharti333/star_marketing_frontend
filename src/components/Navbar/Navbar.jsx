import "./Navbar.scss";

import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import {
  designData,
  developmentData,
  marketingData,
  navCards,
} from "../../assets/navData";
import { baseUrl } from "../../main";
import axios from "axios";

const Navbar = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleCard = (index) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    setOpenCardIndex(null);
  }, [location.pathname]);

  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setOpenCardIndex(null);
      }
    };

    if (openCardIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCardIndex]);

  const contact_nav = location.pathname;

  const [marketingNewData, setMarketingNewData] = useState([]);
  const [developmentNewData, setDevelopmentNewData] = useState([]);
  const [designNewData, setDesignNewData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/service/all-services`);
        const services = data?.services || [];

        const marketing = [];
        const development = [];
        const design = [];

        services.forEach((service) => {
          const selected = service?.selectedService?.toLowerCase();
          if (selected === "marketing") marketing.push(service);
          else if (selected === "development") development.push(service);
          else if (selected === "design") design.push(service);
        });

        setMarketingNewData(marketing);
        setDevelopmentNewData(development);
        setDesignNewData(design);
      } catch (err) {
        console.error("❌ Error fetching services:", err);
      }
    };

    fetchServices();
  }, []);

  return (
    <div
      className={`navbar ${isScrolled ? "blurred" : ""} ${
        contact_nav === "/contact-us" && "contact-nav"
      }`}
    >
      <div className="navbar-left">
        <img src={logo} alt="star marketing image" loading="lazy" />
      </div>

      <div className="nav-mobile-menu">
        <MobileMenu />
      </div>

      <div className="navbar-center">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About</Link>
          </li>
          <li>
            <Link onClick={() => toggleCard(0)}>Design</Link>

            {openCardIndex === 0 && (
              <div className="nav-card" ref={cardRef}>
                <div className="nav-card-left">
                  <div className="nav-card-left-top">
                    <p>{designData.title}</p>
                    <p>{designData.desc}</p>
                  </div>
                  <hr />
                  <div className="nav-card-left-bottom">
                    <p>Explore</p>
                    <div className="nav-card-links">
                      {designData.submenu.map((item, index) => (
                        <Link
                          to={`${item.link}`}
                          className="nav-card-link"
                          key={index}
                        >
                          <span>{item.title}</span>
                        </Link>
                      ))}
                      {designNewData?.map((item, index) => (
                        <Link
                          to={`/service/1`}
                          className="nav-card-link"
                          key={index}
                        >
                          <span>{item.bannerSection.serviceName}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {navCards.map((item, index) => (
                  <div className="nav-card-right" key={index}>
                    <img
                      src={item.dImg}
                      alt="Company Overview"
                      loading="lazy"
                    />
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link onClick={() => toggleCard(1)}>Development</Link>

            {openCardIndex === 1 && (
              <div className="nav-card" ref={cardRef}>
                <div className="nav-card-left">
                  <div className="nav-card-left-top">
                    <p>{developmentData.title}</p>
                    <p>{developmentData.desc}</p>
                  </div>
                  <hr />
                  <div className="nav-card-left-bottom">
                    <p>Explore</p>
                    <div className="nav-card-links">
                      {developmentData.submenu.map((item, index) => (
                        <Link
                          to={`${item.link}`}
                          className="nav-card-link"
                          key={index}
                        >
                          <span>{item.title}</span>
                        </Link>
                      ))}

                      {developmentNewData?.map((item, index) => (
                        <Link
                          to={`/service/1`}
                          className="nav-card-link"
                          key={index}
                        >
                          <span>{item.bannerSection.serviceName}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {navCards.map((item, index) => (
                  <div className="nav-card-right" key={index}>
                    <img
                      src={item.devImg}
                      alt="Company Overview"
                      loading="lazy"
                    />
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link onClick={() => toggleCard(3)}>Marketing</Link>

            {openCardIndex === 3 && (
              <div className="nav-card" ref={cardRef}>
                <div className="nav-card-left">
                  <div className="nav-card-left-top">
                    <p>{marketingData.title}</p>
                    <p>{marketingData.desc}</p>
                  </div>
                  <hr />
                  <div className="nav-card-left-bottom">
                    <p>Explore</p>
                    <div className="nav-card-links">
                      {marketingData.submenu.map((item, index) => (
                        <Link
                          to={`${item.link}`}
                          className="nav-card-link"
                          key={index}
                        >
                          <span>{item.title}</span>
                        </Link>
                      ))}
                      {marketingNewData?.map((item, index) => (
                        <Link
                          to={`/service/1`}
                          className="nav-card-link"
                          key={index}
                        >
                          <span>{item.bannerSection.serviceName}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {navCards.map((item, index) => (
                  <div className="nav-card-right" key={index}>
                    <img
                      src={item.mImg}
                      alt="Company Overview"
                      loading="lazy"
                    />
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to={"/founder"}>Founder</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to={"/contact-us"}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
