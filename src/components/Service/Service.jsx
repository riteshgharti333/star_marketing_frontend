import "./Service.scss";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { servieHomeData } from "../../assets/serviceData";

const Service = ({ approachData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const cardRefs = useRef([]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(
            rect.top + rect.height / 2 - window.innerHeight / 2,
          );
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="service">
      <div className="service-contaniner">
        <div className="service-top">
          <h2>{approachData.title}</h2>
          <p>{approachData.desc}</p>
        </div>

        <div className="service-cards">
          {approachData.approchCards.map((item, index) => {
            const isActive = index === activeIndex;
            const isBeforeActive = index < activeIndex;

            const bgColor = isActive
              ? "#ffffff"
              : isBeforeActive
                ? "rgba(255, 255, 255, 0.6)"
                : "#ffffff";

            const blur = isBeforeActive ? "blur(6px)" : "none";
            const opacity = isBeforeActive ? 0.5 : 1;

            return (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="service-card"
                animate={{
                  scale: isBeforeActive ? 1 - (activeIndex - index) * 0.07 : 1,
                  opacity,
                  backgroundColor: bgColor,
                  backdropFilter: blur,
                  WebkitBackdropFilter: blur,
                }}
                style={{
                  top: `${index * 30}px`,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="service-card-left">
                  <span>{item.no}</span>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className="service-card-right">
                  <img src={item.img} alt="service-image" loading="lazy" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
