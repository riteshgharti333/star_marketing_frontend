import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

const ScrollToTopAndTrack = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
};

export default ScrollToTopAndTrack;
