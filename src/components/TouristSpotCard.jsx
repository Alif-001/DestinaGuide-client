import React from "react";
import { Link } from "react-router-dom";

const TouristSpotCard = ({
  spot,
  isOwner = false,
  onEdit,
  onDelete,
  onViewDetails,
}) => {
  const {
    _id: id,
    image,
    spotName,
    country,
    location,
    description,
    averageCost,
    season,
    travelTime,
    visitorsPerYear,
  } = spot;

  return (
    <div className="flex flex-col bg-base-400 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden transform hover:scale-102 transition-all duration-300 ease-in-out mb-8 border border-gray-200">
      <img
        src={image}
        alt={spotName}
        className="w-full h-80 object-cover rounded-t-3xl hover:scale-105 transition-all duration-300 ease-in-out"
      />
      <div className="p-6 space-y-4 flex-grow">
        <h2 className="text-2xl font-extrabold text-gray-300 truncate">
          {spotName}
        </h2>
        <p className="text-gray-500 text-sm truncate">
          📍 {location}, {country}
        </p>
        <p className="text-gray-300 text-base overflow-clip text-ellipsis line-clamp-3 truncate">
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            💰 <span>${averageCost.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            🌤️ <span className="truncate">{season}</span>
          </div>
          <div className="flex items-center gap-1">
            🛫 <span>{travelTime}</span>
          </div>
          <div className="flex items-center gap-1">
            👥 <span>{visitorsPerYear.toLocaleString()} visitors</span>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col md:px-6 justify-center items-center gap-4 w-full">
        {isOwner ? (
          <>
            <button
              className="btn btn-secondary text-white font-bold flex-grow w-full min-w-[150px] py-3 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              onClick={onEdit}
            >
              ✏️ Update
            </button>
            <Link
              to={`/tourist-spots/${id}`}
              className="btn btn-primary text-white font-bold flex-grow w-full min-w-[150px] py-3 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              onClick={onViewDetails}
            >
              🔍 View Details
            </Link>
            <button
              className="btn btn-error text-white font-bold flex-grow w-full min-w-[150px] py-3 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              onClick={onDelete}
            >
              🗑️ Delete
            </button>
          </>
        ) : (
          <Link
            to={`/tourist-spots/${id}`}
            className="btn btn-primary text-white font-bold flex-grow w-full min-w-[150px] py-3 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            onClick={onViewDetails}
          >
            🔍 View Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default TouristSpotCard;
