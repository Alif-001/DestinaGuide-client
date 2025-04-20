import React from "react";
import BannerCarousel from "../components/Banner";

import TopTouristSpotCard from "../components/TopTouristSpot";

const Home = () => {
  return (
    <>
      <BannerCarousel />
      <div className="home  text-red border-2 border-red-500 bg-gray-800 p-4 my-10">
        <p className="text-center text-white">this is home</p>
        <TopTouristSpotCard />
      </div>
    </>
  );
};

export default Home;
