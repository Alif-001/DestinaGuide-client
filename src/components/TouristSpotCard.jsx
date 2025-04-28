import React from "react";

const TouristSpotCard = ({
  spot,
  isOwner = false,
  onEdit,
  onDelete,
  onViewDetails,
}) => {
  const {
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
    <>
      <div className="  bg-base-400 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden transform hover:scale-102 transition-all duration-300 ease-in-out  mb-8 border border-gray-200 ">
        <img
          src={image}
          alt={spotName}
          className="w-full h-80 object-cover rounded-t-3xl hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-extrabold text-gray-300">{spotName}</h2>
          <p className="text-gray-500 text-sm">
            📍 {location}, {country}
          </p>
          <p className="text-gray-300 text-base line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              💰 <span>${averageCost.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              🌤️ <span>{season}</span>
            </div>
            <div className="flex items-center gap-1">
              🛫 <span>{travelTime}</span>
            </div>
            <div className="flex items-center gap-1">
              👥 <span>{visitorsPerYear.toLocaleString()} visitors</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex space-x-2 justify-around items-center mb-4">
          {isOwner ? (
            <>
              <button
                className="
          btn btn-secondary text-white font-bold
          transform transition-transform duration-200 ease-in-out
          hover:scale-105 active:scale-95
        "
                onClick={onEdit}
              >
                ✏️ Update
              </button>
              <button
                className="
          btn btn-primary text-white font-bold
          transform transition-transform duration-200 ease-in-out
          hover:scale-105 active:scale-95
        "
                onClick={onViewDetails}
              >
                🔍 View Details
              </button>
              <button
                className="
          btn btn-error text-white font-bold
          transform transition-transform duration-200 ease-in-out
          hover:scale-105 active:scale-95
        "
                onClick={onDelete}
              >
                🗑️ Delete
              </button>
            </>
          ) : (
            <button
              className="
        btn btn-primary text-white font-bold
        transform transition-transform duration-200 ease-in-out
        hover:scale-105 active:scale-95
      "
              onClick={onViewDetails}
            >
              🔍 View Details
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TouristSpotCard;
