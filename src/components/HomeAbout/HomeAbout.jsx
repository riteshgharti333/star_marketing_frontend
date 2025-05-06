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

const HomeAbout = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

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
              {reviewData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="homeAbout-bottom-card">
                    <h4>" {item.review} "</h4>
                    <div className="homeAbout-bottom-card-profile">
                      <img src={item.img} alt={item.title} loading="lazy" />
                      <div className="homeAbout-bottom-card-profile-right">
                        <p>{item.title}</p>
                        <p>{item.desc}</p>
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
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
