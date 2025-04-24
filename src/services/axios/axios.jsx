// client/src/services/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`, // Set backend API base URL
});

export default api;
