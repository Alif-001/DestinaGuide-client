import React from "react";
import BannerCarousel from "../components/Banner";
import MatchedCountrySpots from "../components/MatchedCountrySpots";
import NewsletterSignup from "../components/NewsletterSignup";
import Testimonials from "../components/Testimonials";
import TravelTips from "../components/TravelTips";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <BannerCarousel />
      <div className="home rounded-2xl p-4 my-10">
        <MatchedCountrySpots />
        <Testimonials />
        <TravelTips />
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default Home;
