import { useState } from "react";
import { chooseData } from "../../assets/data";
import "./ServiceOption.scss";

import { motion, AnimatePresence } from "framer-motion";

const ServiceOption = ({ serviceOption }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="serviceOption">
      <div className="serviceOption-info-left">
        <h2>{serviceOption.title}</h2>
        <p>{serviceOption.desc}</p>
      </div>

      <div className="serviceOption-info-right">
        <div className="serviceOption-info-right-items">
          {serviceOption.serviceOptionItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className="serviceOption-info-right-item" key={index}>
                <div
                  className="serviceOption-info-right-item-top"
                  onClick={() => toggleDesc(index)}
                >
                  <h3>{item.title}</h3>

                  <motion.span
                    initial={false}
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="icon"
                  >
                    {isOpen ? "-" : "+"}
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="serviceOption-info-right-item-desc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceOption;
