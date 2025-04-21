import React from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";

export const loader = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/tourist-spots`
  );
  const data = await response.json();
  return data;
};

const AllTouristSpots = () => {
  const touristSpots = useLoaderData();

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">
        All Tourist Spots
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {touristSpots.map((spot, index) => (
          <TouristSpotCard key={spot._id || index} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpots;
