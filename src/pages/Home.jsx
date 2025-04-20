import React from "react";
import TouristSpotCard from "../components/TouristSpotCard";

const Home = () => {
  return (
    <div className="home  text-red border-2 border-red-500 bg-gray-800 p-4 my-10">
      <p className="text-center text-white">this is home</p>
      <TouristSpotCard></TouristSpotCard>
    </div>
  );
};

export default Home;
