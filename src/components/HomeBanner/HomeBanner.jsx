import "./HomeBanner.scss";

import banner_video from "../../assets/bannerVideo/bannervideo.mp4";
import { brandCards } from "../../assets/serviceSliderData/partnerCards";
import { homeBrandCards } from "../../assets/data";

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

function HomeBanner() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["company-cards"],
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
    <div className="homeBanner">
      <div className="banner-video">
        <video src={banner_video} autoPlay loop muted playsInline />

        <div className="homeBanner-video-desc">
          <p>
            <div className="dot"></div>Your digital partner
          </p>
          <h3>We accelerate ambition, grow brands</h3>
        </div>
      </div>

      <div className="homeBanner-desc">
        <h2>
          We accelerate ambition, grow brands, build digital products, and craft
          experiences that bring positive change, value, and innovation.
        </h2>
        <div className="homeBanner-desc-bottom">
          <p className="profile">
            <div className="dot"></div>Company Profile
          </p>
          <div className="homeBanner-desc-bottom-right">
            <p>
              We are a team of professional designers, developers, marketers and
              IT specialists combining our knowledge and expertise to create
              exceptional outcomes tailored to your business’s needs and
              requirements.
            </p>
            <p>
              With one of the largest ranges of services under one roof in the
              UK, Mumbai, Sikar. we are your trusted partner for all things
              digital. Tell us about your goals and we’ll show you how we can
              achieve them. Whatever your project, we’d love to be involved.
            </p>
          </div>
        </div>
      </div>

      <div className="homeBanner-cards-container">
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
          <div className="homeBanner-cards-track">
            {[...data, ...data].map((item, index) => (
              <div className="homeBanner-card" key={index}>
                <img src={item.image} alt="brand-image" loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeBanner;
