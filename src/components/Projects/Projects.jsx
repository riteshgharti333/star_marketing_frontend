import "./Projects.scss";

import { projectData } from "../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";

const Projects = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="projects">
      <h2>Our Projects</h2>

      <div className="projects-cards">
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
            prevEl: ".graphic-button-prev-custom",
            nextEl: ".graphic-button-next-custom",
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {projectData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="projects-card">
                <img src={item.img} alt="" />

                <div className="projects-card-desc">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="graphic-nav-buttons">
          <div
            className={`graphic-button-prev-custom ${
              isBeginning ? "disabled" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GoArrowLeft />
          </div>
          <div
            className={`graphic-button-next-custom ${isEnd ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
