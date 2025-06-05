import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MobileMenu.scss";
import { Link, useLocation } from "react-router-dom";
import { baseUrl } from "../../main";
import axios from "axios";

const menuItems = [
  { title: "Home", link: "/" },
  {
    title: "Design",
    submenu: [
      { title: "Web Design", link: "/design/web-design" },
      { title: "Graphic Design", link: "/design/graphic-design" },
      { title: "Branding", link: "/design/branding" },
      { title: "Production", link: "/design/production" },
    ],
  },

  {
    title: "Development",
    submenu: [
      { title: "Web Development", link: "/development/web-development" },
      {
        title: "Software Development",
        link: "/development/software-development",
      },
      { title: "e Commerce", link: "/development/e-commerce" },
      { title: "App Developement", link: "/development/app-development" },
      {
        title: "Support & Maintenance",
        link: "/development/support-and-maintenance",
      },

      { title: "Testing", link: "/development/testing" },
      { title: "Wordpress", link: "/development/wordpress-development" },
    ],
  },
  {
    title: "Marketing",
    submenu: [
      { title: "Marketing Strategy", link: "/marketing/marketing-strategy" },
      { title: "Holistic Marketing", link: "/marketing/holistic-marketing" },
      { title: "SEO", link: "/marketing/seo" },
      { title: "Paid Advertising", link: "/marketing/paid-advertising" },
      { title: "Social Media", link: "/marketing/social-media" },
      { title: "Content", link: "/marketing/content" },
      {
        title: "Conversion Rate Optimisation",
        link: "/marketing/conversion-rate-optimisation",
      },
      {
        title: "Data Analytics & Reporting",
        link: "/marketing/data-analytics-and-reporting",
      },
    ],
  },

  { title: "About", link: "/about-us" },
  { title: "Founder", link: "/founder" },

  { title: "Contact", link: "/contact-us" },

];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);
  const scrollBlockRef = useRef(document.body); // default to body

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubmenu = (index) =>
    setActiveSubmenu(activeSubmenu === index ? null : index);

  const location = useLocation();

  useEffect(() => {
    setActiveSubmenu(false);
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
      setActiveSubmenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 💡 Prevent background scroll
  useEffect(() => {
    const el = scrollBlockRef.current;

    if (isOpen) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "auto";
    }

    return () => {
      el.style.overflow = "auto";
    };
  }, [isOpen]);

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

  const getMergedMenuItems = () => {
    return menuItems.map((item) => {
      if (item.title === "Marketing" && marketingNewData.length > 0) {
        return {
          ...item,
          submenu: [
            ...item.submenu,
            ...marketingNewData.map((service) => ({
              title: service.bannerSection?.serviceName,
              link: `/service/${service.selectedService}/${service.bannerSection.serviceName}/${service._id}`,
            })),
          ],
        };
      }
      if (item.title === "Development" && developmentNewData.length > 0) {
        return {
          ...item,
          submenu: [
            ...item.submenu,
            ...developmentNewData.map((service) => ({
              title: service.bannerSection?.serviceName,
              link: `/service/${service.selectedService}/${service.bannerSection.serviceName}/${service._id}`,
            })),
          ],
        };
      }
      if (item.title === "Design" && designNewData.length > 0) {
        return {
          ...item,
          submenu: [
            ...item.submenu,
            ...designNewData.map((service) => ({
              title: service.bannerSection?.serviceName,
              link: `/service/${service.selectedService}/${service.bannerSection.serviceName}/${service._id}`,
            })),
          ],
        };
      }
      return item;
    });
  };

  const mergedMenuItems = getMergedMenuItems();

  return (
    <div className="mobileMenu" ref={menuRef}>
      {/* Toggle Button */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Animate Presence for Menu */}
     <AnimatePresence>
  {isOpen && (
    <motion.ul
      className="menuList"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {mergedMenuItems.map((item, i) => (
        <li key={i} className="mobile-link">
          {item.submenu ? (
            <>
              <div
                className="submenu-title"
                onClick={() => toggleSubmenu(i)}
              >
                {item.title}
                <span
                  className={`plus ${activeSubmenu === i ? "open" : ""}`}
                ></span>
              </div>
              <AnimatePresence>
                {activeSubmenu === i && (
                  <motion.ul
                    className="submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.submenu.map((sub, j) => (
                      <li key={j} className="submenu-item">
                        <Link to={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link to={item.link}>{item.title}</Link>  // ✅ else fallback correctly wrapped
          )}
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>

    </div>
  );
};

export default MobileMenu;
