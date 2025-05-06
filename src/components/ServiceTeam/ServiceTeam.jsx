import "./ServiceTeam.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";

const ServiceTeam = ({ dev }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className={`serviceTeam ${dev ? "dev" : ""}`}>
      <h2>Who you'll be working with</h2>

      <div className="graphicDesign-slider-cards">
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
            prevEl: ".web-button-prev-custom",
            nextEl: ".web-button-next-custom",
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 2.3 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4.5 },
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="graphicDesign-slider-card">
                <img
                  src="https://www.bluefrontier.co.uk/images/staff-profile-images/batch%201/Rachel%20Oliver%20List.jpg"
                  alt="team-image"
                  loading="lazy"
                />
                <h4>John Doe</h4>
                <p>Software Engineer</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Arrows */}
        <div className="web-nav-buttons">
          <div
            className={`web-button-prev-custom ${
              isBeginning ? "disabled" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GoArrowLeft />
          </div>
          <div
            className={`web-button-next-custom ${isEnd ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTeam;
