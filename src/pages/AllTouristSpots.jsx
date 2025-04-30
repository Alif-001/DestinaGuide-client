import { useState, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import api from "../services/axios/axios";
import React from "react";

export const loader = async () => {
  try {
    const response = await api.get(`/tourist-spots`);
    return response.data;
  } catch (error) {
    console.error("Failed to load tourist spots:", error);
    throw new Error("Could not fetch tourist spots data");
  }
};

const AllTouristSpots = () => {
  const loadedTouristSpots = useLoaderData();
  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("desc"); // "asc" or "desc"
  const [minVisitors, setMinVisitors] = useState(0);

  // 🔁 Filtering and sorting the spots based on UI controls
  const filteredAndSortedSpots = useMemo(() => {
    return [...loadedTouristSpots]
      .filter((spot) => spot.visitorsPerYear >= minVisitors)
      .sort((a, b) => {
        if (sortOrder === "asc") return a.visitorsPerYear - b.visitorsPerYear;
        return b.visitorsPerYear - a.visitorsPerYear;
      });
  }, [loadedTouristSpots, sortOrder, minVisitors]);

  function handleView(_id) {
    navigate(`/tourist-spots/${_id}`);
  }

  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-8">
        All Tourist Spots
      </h1>

      {/* 🔧 Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
        <label className="text-gray-300">
          Sort by Visitors:
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="ml-2 px-2 py-1 rounded"
          >
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </label>

        <label className="text-gray-300">
          Min Visitors:
          <input
            type="number"
            value={minVisitors}
            onChange={(e) => setMinVisitors(Number(e.target.value))}
            className="ml-2 px-2 py-1 rounded"
            placeholder="e.g. 100000"
          />
        </label>
      </div>

      {/* 🔍 Tourist Spot Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredAndSortedSpots.map((spot) => (
          <TouristSpotCard
            key={spot._id}
            spot={spot}
            isOwner={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onViewDetails={() => handleView(spot._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpots;
