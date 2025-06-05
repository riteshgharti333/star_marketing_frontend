import "./BrandCards.scss";
import { useEffect, useState } from "react";
import { brandCards } from "../../assets/serviceSliderData/partnerCards";

import { baseUrl } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchCards = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(`${baseUrl}/company-card/all-company-cards`);

  return data?.companyCard;
};

const BrandCards = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["brand-cards"],
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  const cardsPerSlide = 6;
  // Chunk the data into arrays of 6 items
  const chunks = [];
  for (let i = 0; i < data?.length; i += cardsPerSlide) {
    chunks.push(data?.slice(i, i + cardsPerSlide));
  }

  useEffect(() => {
    // Media query and listener
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleResize);
    setIsMobile(mediaQuery.matches); // initial set

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isMobile && chunks.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % chunks.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isMobile, chunks.length]);

  const displayedCards = isMobile ? chunks[currentSlide] : data;

  return (
    <div className="brandCards">
      <p>
        <div className="dot"></div>Who we've partnered with
      </p>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className="error">
          <div className="error-desc">
            <h3>❌ Failed to load cards</h3>
            <p>Try refreshing the page or check your connection.</p>
          </div>
        </div>
      ) : (
        <div className="brand-cards">
          {displayedCards?.map((item, index) => (
            <div className="brand-card" key={index}>
              <img src={item.image} alt={`brand-${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandCards;
