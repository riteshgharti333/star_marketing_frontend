import { aboutCards, reviewCards } from "../../assets/data";
import "./HomeAbout.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState, useEffect } from "react";
import { reviewData } from "../../assets/reviewData";
import BrandCards from "../BrandCards/BrandCards";

import collage_img from "../../assets/images/collage.jpeg";
import { Link } from "react-router-dom";

import { baseUrl } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchReview = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(`${baseUrl}/review/all-reviews`);
  return data?.reviews;
};

const HomeAbout = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["review"],
    queryFn: fetchReview,
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

  return (
    <div className="homeAbout">
      <div className="homeAbout-container">
        <div className="homeAbout-top">
          <div className="homeAbout-top-left">
            <div className="homeAbout-top-left-top">
              <p>
                <div className="dot"></div>About Us
              </p>
              <h3>Allow us to introduce ourselves...</h3>
            </div>
            <div className="homeAbout-top-left-bottom">
              <p>
                Star Marketing is a specialist digital agency offering expert
                support across every area of the digital landscape. Find out
                more about who we are, our values and culture, our history, and
                the incredible team behind everything we offer our clients.
              </p>
              <Link className="about-btn" to={"/about-us"}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="homeAbout-top-right">
            <img src={collage_img} alt="partner-image" loading="lazy" />
          </div>
        </div>
        <div className="homeAbout-center">
          <BrandCards />
        </div>

        <div className="homeAbout-bottom">
          <div className="homeAbout-bottom-top">
            <p>
              <div className="dot"></div>Who we've partnered with
            </p>
            <h3>
              We pride ourselves on the strength of our relationships. Here's
              what some of our clients have to say:
            </h3>
          </div>

          {isLoading ? (
            <Loader />
          ) : isError ? (
            <div className="error">
              <div className="error-desc">
                <h3>❌ Failed to load reviews</h3>
                <p>Try refreshing the page or check your connection.</p>
              </div>
            </div>
          ) : (
            <div className="homeAbout-bottom-cards">
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
                  480: { slidesPerView: 1.2 },
                  768: { slidesPerView: 1.5 },
                  1024: { slidesPerView: 2.2 },
                }}
              >
                {data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="homeAbout-bottom-card">
                      <h4>" {item.description} "</h4>
                      <div className="homeAbout-bottom-card-profile">
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <div className="homeAbout-bottom-card-profile-right">
                          <p>{item.name}</p>
                        </div>
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
                  className={`swiper-button-next-custom ${
                    isEnd ? "disabled" : ""
                  }`}
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <GoArrowRight />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
