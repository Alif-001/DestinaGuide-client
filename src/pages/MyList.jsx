import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import api from "../services/axios/axios";
import useAuth from "../utils/auth/useAuth";

export const loader = async ({ params }) => {
  const { id } = params; // UID from route

  try {
    const response = await api.get(
      `${import.meta.env.VITE_REACT_APP_API_URL}/${id}/my-list`
    );
    return(response.data);
  } catch (error) {
    console.error("Error fetching tourist spots:", error);
    throw new Response("Failed to fetch user list", { status: 500 });
  }
};

const MyList = () => {
  const { user } = useAuth();
  const LoadSpots = useLoaderData();
  const [spots, setSpots] = useState(LoadSpots);
  console.log(spots)  
  const navigate = useNavigate();


   const handleEdit = (id) => {
     navigate(`/update-spot/${id}`);
   };

   const handleDelete = async (id) => {
     // call your delete API then refetch or update local state
     await fetch(`${import.meta.env.VITE_API_URL}/tourist-spots/${id}`, {
       method: "DELETE",
     });
     // ideally refetch loader or update state here...
   };

  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">
        My List
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {spots.map((spot, idx) => (
          <TouristSpotCard
            key={spot._id}
            spot={spot}
            isOwner={true} // ← flag indicating “my spot”
            onEdit={() => handleEdit(spot)}
            onDelete={() => handleDelete(spot._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyList;
