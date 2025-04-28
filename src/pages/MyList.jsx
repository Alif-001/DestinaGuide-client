import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TouristSpotCard from "../components/TouristSpotCard";
import api from "../services/axios/axios";
import useAuth from "../utils/auth/useAuth";
import useHandleDelete from "../utils/handlers/handleDelete";

export const loader = async ({ params }) => {
  const { id } = params; // UID from route

  try {
    const response = await api.get(`/${id}/my-list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tourist spots:", error);
    throw new Response("Failed to fetch user list", { status: 500 });
  }
};

const MyList = () => {
  const { user } = useAuth();
  const LoadSpots = useLoaderData();
  const [spots, setSpots] = useState(LoadSpots);
  console.log(spots);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/update-spot/${id}`);
  };

  const handleDelete = useHandleDelete(spots, setSpots);

  return (
    <div className="px-4 py-8 w-full">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">
        My List
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
        {spots.length === 0 && (
          <div className="col-span-3 text-center text-gray-500">
            <p className="text-lg">No tourist spots found.</p>
          </div>
        )}
        {spots.map((spot, idx) => (
          <TouristSpotCard
            key={spot._id}
            spot={spot}
            isOwner={true} // ← flag indicating “my spot”
            onEdit={() => handleEdit(spot)}
            onDelete={() => handleDelete(spot._id)}
            onViewDetails={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default MyList;
