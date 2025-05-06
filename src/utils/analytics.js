import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-036Q8NY1HY");
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
