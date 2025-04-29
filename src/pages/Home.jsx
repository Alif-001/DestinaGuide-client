import React from "react";
import BannerCarousel from "../components/Banner";

import MatchedCountrySpots from "../components/MatchedCountrySpots";
import Testimonials from "../components/Testimonials";
import TravelTips from "../components/TravelTips";
import NewsletterSignup from "../components/NewsletterSignup";

const Home = () => {
  return (
    <>
      <BannerCarousel />
      <div className="home  rounded-2xl  bg-gray-800 p-4 my-10">
        
        <MatchedCountrySpots />
        <Testimonials></Testimonials>
        <TravelTips/>
        <NewsletterSignup></NewsletterSignup>
      </div>
    </>
  );
};

export default Home;
