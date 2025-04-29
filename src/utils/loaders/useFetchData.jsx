import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios/axios";
import useAuth from "../utils/auth/useAuth";

const useFetchData = (setData, endpoint) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // Wait until loading is complete

    if (!user) {
      navigate("/login", {
        replace: true,
        state: { message: "Please log in first." },
      });
      return;
    }

    const fetchData = async () => {
      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user, loading, endpoint, navigate, setData]);
};

export default useFetchData;
