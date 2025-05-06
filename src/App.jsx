import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import WebDesign from "./pages/DesignService/WebDesign/WebDesign";
import GraphicDesign from "./pages/DesignService/GraphicDesign/GraphicDesign";
import Branding from "./pages/DesignService/Branding/Branding";
import Production from "./pages/DesignService/Production/Production";
import WebDevelopment from "./pages/Developement/WebDevelopment/WebDevelopment";
import SweDevelopment from "./pages/Developement/SweDevelopment/SweDevelopment";
import ECommerce from "./pages/Developement/ECommerce/ECommerce";
import AppDevelopement from "./pages/Developement/AppDevelopement/AppDevelopement";
import Support from "./pages/Developement/Support/Support";
import Testing from "./pages/Developement/Testing/Testing";
import Wordpress from "./pages/Developement/Wordpress/Wordpress";
import Marketing from "./pages/Marketing/Marketing/Marketing";
import Holistic from "./pages/Marketing/Holistic/Holistic";
import Seo from "./pages/Marketing/Seo/Seo";
import Advertising from "./pages/Marketing/Advertising/Advertising";
import Social from "./pages/Marketing/Social/Social";
import Content from "./pages/Marketing/Content/Content";
import Cro from "./pages/Marketing/Cro/Cro";
import Analytics from "./pages/Marketing/Analytics/Analytics";
import { useEffect } from "react";
import Contact from "./pages/Contact/Contact";
import Founder from "./pages/Founder/Founder";

import { initGA } from "./utils/analytics";
import ScrollToTopAndTrack from "./components/ScrollToTopAndTrack";
import CurtainLoader from "./components/CurtainLoader/CurtainLoader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TermPage from "./pages/TermPage/TermPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import ContactButtons from "./components/ContactButtons/ContactButtons";

import { Toaster } from "react-hot-toast";
import OfferComp from "./components/OfferComp/OfferComp";
import WorksPage1 from "./pages/WorksPage/WorksPage1/WorksPage1";
import WorksPage2 from "./pages/WorksPage/WorksPage2/WorksPage2";

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="app">
      <CurtainLoader />
      <ContactButtons />
      <OfferComp />
      <BrowserRouter>
        <ScrollToTopAndTrack />

        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/terms-and-conditions" element={<TermPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />

          <Route path="*" element={<NotFoundPage />} />

          {/* Design */}
          <Route path="/design/web-design" element={<WebDesign />} />
          <Route path="/design/graphic-design" element={<GraphicDesign />} />
          <Route path="/design/branding" element={<Branding />} />
          <Route path="/design/production" element={<Production />} />

          {/* Development */}
          <Route
            path="/development/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/development/software-development"
            element={<SweDevelopment />}
          />
          <Route path="/development/e-commerce" element={<ECommerce />} />
          <Route
            path="/development/app-development"
            element={<AppDevelopement />}
          />
          <Route
            path="/development/support-and-maintenance"
            element={<Support />}
          />

          <Route path="/development/testing" element={<Testing />} />
          <Route
            path="/development/wordpress-development"
            element={<Wordpress />}
          />

          {/* Marketing */}
          <Route path="/marketing/marketing-strategy" element={<Marketing />} />
          <Route path="/marketing/holistic-marketing" element={<Holistic />} />
          <Route path="/marketing/seo" element={<Seo />} />
          <Route path="/marketing/seo" element={<Seo />} />
          <Route path="/marketing/paid-advertising" element={<Advertising />} />
          <Route path="/marketing/social-media" element={<Social />} />
          <Route path="/marketing/content" element={<Content />} />
          <Route
            path="/marketing/conversion-rate-optimisation"
            element={<Cro />}
          />
          <Route
            path="/marketing/data-analytics-and-reporting"
            element={<Analytics />}
          />

          {/* How it works */}
          <Route
            path="/how-website-works?"
            element={<WorksPage1 />}
          />
             <Route
            path="/how-social-media-works?"
            element={<WorksPage2 />}
          />
        </Routes>

        <Footer />
        <Toaster
          toastOptions={{
            style: {
              fontFamily: "Jost, sans-serif",
              fontSize: "18px",
              fontWeight: "600",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
