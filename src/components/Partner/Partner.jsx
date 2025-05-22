import "./Partner.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { partnerCards } from "../../assets/data";

import { baseUrl } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchCards = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(`${baseUrl}/partner-card/all-partner-cards`);
  return data?.partnerCards;
};

const Partner = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["parnter-cards"],
    queryFn: fetchCards,
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
    <div className="partner">
      <h2>Associate Partner</h2>

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
        <div className="partner-slider-cards">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={1000}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              480: { slidesPerView: 2.3 },
              768: { slidesPerView: 3.5 },
              1024: { slidesPerView: 3.5 },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="partner-slider-card">
                  <img src={item.image} alt="brand-image" loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Partner;
