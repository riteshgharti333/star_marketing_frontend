import "./ServiceSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { webCards } from "../../assets/data";

const ServiceSlider = ({ serviceData, dot }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="serviceSlider">
      <div className="serviceSlider-top">
        <h2>{serviceData.title}</h2>
        <p>{serviceData.desc}</p>
      </div>

      <div className="serviceSlider-cards">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
          navigation={{
            prevEl: ".service-button-prev-custom",
            nextEl: ".service-button-next-custom",
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {serviceData.serviceCards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="serviceSlider-card">
                <div className="serviceSlider-card-top">
                  <span>
                    <div className={`dot ${dot}`}></div>Service
                  </span>
                  <h4>{item.title}</h4>
                </div>

                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="service-nav-buttons">
          <div
            className={`service-button-prev-custom ${
              isBeginning ? "disabled" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GoArrowLeft />
          </div>
          <div
            className={`service-button-next-custom ${isEnd ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
