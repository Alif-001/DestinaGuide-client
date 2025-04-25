import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import api from "../../services/axios/axios";

export const handleChange = (setFormData) => (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const isValidImageUrl = (url) =>
  /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);

export const validateFormData = (formData) => {
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

export const handleSubmit =
  ({ formData, user, setFormData, navigate }) =>
  async (e) => {
    e.preventDefault();
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
      await api.post(`/tourist-spots`, payload);

      toast.success("🎉 Tourist spot added successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });

      Swal.fire({
        title: "Tourist Spot Added Successfully! 🎉",
        text: "Your new destination has been added to the guide.",
        icon: "success",
        background: "#1e1e1e",
        color: "#ffffff",
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: "Add More",
        denyButtonText: "View Your List",
        cancelButtonText: "Go Home",
        confirmButtonColor: "#22c55e", // Green
        denyButtonColor: "#3b82f6", // Blue
        cancelButtonColor: "#a855f7", // Purple
        customClass: {
          popup: "swal2-dark",
          title: "text-2xl",
          confirmButton: "rounded-lg",
          denyButton: "rounded-lg",
          cancelButton: "rounded-lg",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // Stay on the form to add more
        } else if (result.isDenied) {
          navigate("/my-list");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate("/");
        }
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
      toast.error("❌ Failed to add spot. Try again later.", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };
