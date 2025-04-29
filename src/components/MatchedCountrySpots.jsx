import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import api from "../services/axios/axios";

export const loader = async () => {
  try {
    const response = await api.get(`/tourist-spots`);
    return response.data;
  } catch (error) {
    console.error("Failed to load tourist spots", error);
    throw new Response("Failed to fetch tourist spots", { status: 500 });
  }
};

const MatchedCountrySpots = () => {
  const touristSpots = useLoaderData();
  const firstSixSpots = touristSpots.slice(0, 6);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white py-12 px-6 rounded-2xl mt-12 shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">
        🌍 Top Tourist Spots
      </h1>

      {firstSixSpots.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center">
          No tourist spots found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {firstSixSpots.map((spot) => (
            <div
              key={spot._id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-2 line-clamp-1">
                {spot.title}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 line-clamp-2 mb-2">
                {spot.description || "No description"}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                📍 {spot.country}
              </p>

              <Link
                to={`/tourist-spots/${spot._id}`}
                className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-center py-2 rounded-lg transition"
              >
                🔍 View Details
              </Link>
            </div>
          ))}
        </div>
      )}

      {touristSpots.length > 6 && (
        <div className="mt-8 text-center">
          <Link
            to="/tourist-spots"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View More ➕
          </Link>
        </div>
      )}
    </section>
  );
};

export default MatchedCountrySpots;
