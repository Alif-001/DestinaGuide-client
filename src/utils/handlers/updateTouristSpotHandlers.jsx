

import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import api from "../../services/axios/axios";


export const updateHandleChange = (setFormData) => (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


export const handleUpdateSubmit =
  ({ formData, user, setFormData, navigate, id }) =>
  async (e) => {
    e.preventDefault();
    
    const isValidImageUrl = (url) =>
      /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    const validateFormData = (formData) => {
      for (let key in formData) {
        if (!formData[key]) {
          toast.error(`Please fill the ${key} field!`, {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
            transition: Bounce,
          });
          return false;
        }
      }
      if (!isValidImageUrl(formData.image)) {
        toast.error("Please provide a valid image URL (jpg, png, etc).", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
        return false;
      }
      return true;
    };

    if (!validateFormData(formData)) return;

    const payload = {
      ...formData,
      averageCost: parseFloat(formData.averageCost),
      visitorsPerYear: parseInt(formData.visitorsPerYear, 10),
      addedBy: {
        name: user.displayName || "Anonymous",
        email: user.email,
        uId: user.uid,
      },
    };

    try {
      await api.patch(`/tourist-spots/${id}`, payload);

      toast.success("🎉 Tourist spot updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });

      Swal.fire({
        title: "Tourist Spot Updated! 🎉",
        text: "Your changes have been saved.",
        icon: "success",
        background: "#1e1e1e",
        color: "#ffffff",
        confirmButtonText: "OK",
        confirmButtonColor: "#22c55e",
        customClass: {
          popup: "swal2-dark",
          title: "text-2xl",
          confirmButton: "rounded-lg",
        },
      }).then(() => {
        navigate(-1);
      });

      setFormData({
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
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to update spot. Try again later.", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };
