import "./Projects.scss";

import { projectData } from "../../assets/data";

import { baseUrl } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState, useEffect } from "react";

const fetchProjects = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(`${baseUrl}/project/all-projects`);

  return data?.projects;
};

const Projects = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  if (isError) {
    console.log("🔴 Error Object:", error);
    if (error.name === "AxiosError") {
      const isNetworkError =
        !error.response ||
        error.message.includes("ECONNRESET") ||
        error.response?.data?.message === "read ECONNRESET";

      if (isNetworkError) {
        setTimeout(() => {
          toast.error("🚫 Network error. Please check your connection.");
        }, 100);
      } else {
        console.error("❗ Server Error:", error.response?.status);
      }
    }
  }

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="projects">
      <h2>Our Projects</h2>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className="error">
          <div className="error-desc dif-err">
            <h3>❌ Failed to load cards</h3>
            <p>Try refreshing the page or check your connection.</p>
          </div>
        </div>
      ) : (
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
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 2.7 },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="projects-card">
                  <img src={item.image} alt="" />

                  <div className="projects-card-desc">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Arrows */}
          <div className="review-nav-buttons">
            <div
              className={`swiper-button-prev-custom ${
                isBeginning ? "disabled" : ""
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <GoArrowLeft />
            </div>
            <div
              className={`swiper-button-next-custom ${isEnd ? "disabled" : ""}`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <GoArrowRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
