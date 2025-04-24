import React from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import axios from "../services/axios/axios";
import api from "../services/axios/axios";

export const loader = async () => {
  try {
    const response = await api.get(`/tourist-spots`);

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Failed to load tourist spots:", error);
    throw new Error("Could not fetch tourist spots data");
  }
};

const AllTouristSpots = () => {
  const touristSpots = useLoaderData();

  return (
    <div className="px-4 py-8 w-full">
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
