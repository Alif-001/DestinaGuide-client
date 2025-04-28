// src/utils/handlers/useHandleDelete.js
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import api from "../../services/axios/axios";

const useHandleDelete = (spots, setSpots) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are You Sure?",
      text: "This action cannot be undone!",
      icon: "warning",

      // Dark-mode styling
      background: "#2d2d2d",
      color: "#f0f0f0",

      showCancelButton: true,
      confirmButtonColor: "#4a90e2",
      cancelButtonColor: "#e94e4e",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",

      customClass: {
        popup: "swal2-dark",
      },
    });

    if (!result.isConfirmed) {
      return; // user cancelled
    }

    try {
      const res = await api.delete(
        `${import.meta.env.VITE_REACT_APP_API_URL}/tourist-spots/${id}`
      );

      if (res.status === 200 && res.data.deletedCount > 0) {
        setSpots((prev) => prev.filter((spot) => spot._id !== id));

        // Show the toast notification first
        toast.success("🎉 Tourist spot deleted successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });

        // Then show the Swal modal
        await Swal.fire({
          title: "Deleted!",
          text: "The spot has been removed.",
          icon: "success",
          background: "#2d2d2d",
          color: "#f0f0f0",
          confirmButtonColor: "#4a90e2",
          confirmButtonText: "OK",
          customClass: {
            popup: "swal2-dark",
          },
        });
      }
    } catch (err) {
      console.error("Failed to delete spot:", err);
      Swal.fire({
        title: "Error",
        text: "Could not delete. Please try again.",
        icon: "error",
        background: "#2d2d2d",
        color: "#f0f0f0",
        confirmButtonColor: "#4a90e2",
        customClass: {
          popup: "swal2-dark",
        },
      });
    }
  };

  return handleDelete;
};

export default useHandleDelete;
