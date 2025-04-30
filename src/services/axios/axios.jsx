import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`, // Set backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
