import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Choose.scss";
import { chooseData } from "../../../assets/data";

const Choose = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="choose">
      <div className="choose-container">
        <div className="choose-left">
          <p>
            <div className="dot"></div>
            Why Choose Us
          </p>
          <h3>
            We create comprehensive strategies and project plans that are
            carefully designed to meet the unique needs of each client, ensuring
            all aspects of your business goals have been addressed. From the
            initial planning stages through to the successful execution of each
            step, we offer full support and guidance throughout the entire
            process.
          </h3>
        </div>

        <div className="choose-right">
          <div className="choose-right-items">
            {chooseData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div className="choose-right-item" key={index}>
                  <div
                    className="choose-right-item-top"
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
                        className="choose-right-item-desc"
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
    </div>
  );
};

export default Choose;
