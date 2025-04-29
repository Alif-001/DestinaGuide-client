import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import api from "../services/axios/axios";

// loader (exported so React Router can use it)
export async function loader({ params }) {
  try {
    const response = await api.get(`/tourist-spots/${params.id}`);
    return response.data;
  } catch (error) {
    console.error("Error loading tourist spot:", error);
    throw new Response("Not Found", { status: 404 });
  }
}

export default function ViewDetails() {
  const spot = useLoaderData();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
    addedBy,
    timezone,
    createdAt,
  } = spot;

  return (
    <div className="flex card mx-auto items-center">
      <div className="my-20 text-gray-300 p-6 flex flex-col max-w-5xl">
        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-3xl shadow-lg"
          title="click to see full image"
        >
          <img
            src={image}
            alt={spotName}
            onClick={() => setIsOpen(true)}
            className="w-full h-[300px] lg:h-[600px] object-cover
                       hover:scale-105 transition-all
                       duration-300 ease-in-out cursor-pointer"
          />
        </div>

        {/* Info */}
        <div
          className="w-full card-body  p-8 shadow-2xl
                     space-y-6 backdrop-blur-lg break-words whitespace-normal"
        >
          <h1 className="text-4xl font-extrabold text-center">{spotName}</h1>
          <p className="text-center text-gray-400">
            📍 {location}, {country}
          </p>
          <p
            className="text-lg text-gray-300 leading-relaxed text-justify
                        break-words whitespace-normal"
          >
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              💰 <span className="font-semibold">Average Cost:</span> $
              {averageCost}
            </div>
            <div className="flex items-center gap-2">
              🌤️ <span className="font-semibold">Best Season:</span> {season}
            </div>
            <div className="flex items-center gap-2">
              🛫 <span className="font-semibold">Travel Time:</span>{" "}
              {travelTime} hours
            </div>
            <div className="flex items-center gap-2">
              👥 <span className="font-semibold">Visitors/Year:</span>{" "}
              {visitorsPerYear.toLocaleString()}
            </div>
            <div className="flex items-center gap-2">
              🧑‍💻 <span className="font-semibold">Added By:</span>{" "}
              {addedBy?.name} ({addedBy?.email})
            </div>
            <div className="flex items-center gap-2">
              🌍 <span className="font-semibold">Timezone:</span> {timezone}
            </div>
            <div className="flex items-center gap-2">
              🕰️ <span className="font-semibold">Created At:</span>{" "}
              {new Date(createdAt?.$date).toLocaleString()}
            </div>
          </div>

          {/* Buttons */}
          <div className="my-4 flex justify-center items-center gap-4 w-full">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-secondary text-white font-bold flex-grow
                         min-w-[150px] py-3 transform transition-transform
                         duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              🔙 Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="btn btn-success text-white font-bold flex-grow
                         min-w-[150px] py-3 transform transition-transform
                         duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50
                     flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute inset-0 m-20 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={spotName}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-circle btn-outline absolute top-5 right-5"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
