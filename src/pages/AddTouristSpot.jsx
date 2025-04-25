import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useAuth from "../utils/auth/useAuth";
import {
  handleChange as createChangeHandler,
  handleSubmit as createSubmitHandler,
} from "../utils/handlers/touristSpotHandlers";

export default function AddTouristSpot() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [formData, setFormData] = useState({
    image: "",
    spotName: "",
    country: "",
    location: "",
    description: "",
    averageCost: "",
    season: "",
    travelTime: "",
    visitorsPerYear: "",
  });

  const handleChange = createChangeHandler(setFormData);
  const handleSubmit = createSubmitHandler({
    formData,
    user,
    setFormData,
    navigate,
  });

  return (
    <div className="flex  items-center justify-center  container my-20">
      <div className=" max-w-3xl mx-auto m-8  p-10 bg-neutral-900 text-white rounded-2xl shadow-md mt-8">
        <h1 className="text-2xl font-bold mb-4">Add a New Tourist Spot 🌍</h1>
        <form onSubmit={handleSubmit} className=" space-y-4">
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="input  w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Spot Name</label>
            <input
              type="text"
              name="spotName"
              value={formData.spotName}
              onChange={handleChange}
              placeholder="Eiffel Tower"
              className="input  w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="France"
              className="input  w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Location (City/Region)
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Paris"
              className="input  w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="A wrought-iron lattice tower on the Champ de Mars..."
              className="textarea  w-full p-2 border rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">
                Average Cost (USD)
              </label>
              <input
                type="number"
                name="averageCost"
                value={formData.averageCost}
                onChange={handleChange}
                placeholder="150"
                className="input  w-full p-2 border rounded-xl"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Best Season</label>
              <input
                type="text"
                name="season"
                value={formData.season}
                onChange={handleChange}
                placeholder="Spring, Summer"
                className="input  w-full p-2 border rounded-xl"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Recommended Travel Time
              </label>
              <input
                type="text"
                name="travelTime"
                value={formData.travelTime}
                onChange={handleChange}
                placeholder="3 days"
                className="input  w-full p-2 border rounded-xl"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Visitors per Year
              </label>
              <input
                type="number"
                name="visitorsPerYear"
                value={formData.visitorsPerYear}
                onChange={handleChange}
                placeholder="7000000"
                className="input  w-full p-2 border rounded-xl"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-2xl bg-black text-white hover:bg-gray-600 shadow-md hover:shadow-lg transition-all duration-400 hover:scale-102 active:scale-95  ease-in-out cursor-pointer
font-semibold"
          >
            Add Spot 🏖️
          </button>
        </form>
        {/* Toast notifications container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}
