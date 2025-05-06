import "./BrandCards.scss";
import { useEffect, useState } from "react";
import { brandCards } from "../../assets/serviceSliderData/partnerCards";

const BrandCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches,
  );

  const cardsPerSlide = 6;

  // Chunk the data into arrays of 6 items
  const chunks = [];
  for (let i = 0; i < brandCards.length; i += cardsPerSlide) {
    chunks.push(brandCards.slice(i, i + cardsPerSlide));
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

  const displayedCards = isMobile ? chunks[currentSlide] : brandCards;

  return (
    <div className="brandCards">
      <p>
        <div className="dot"></div>Who we've partnered with
      </p>

      <div className="brand-cards">
        {displayedCards.map((item, index) => (
          <div className="brand-card" key={index}>
            <img src={item.img} alt={`brand-${index}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
