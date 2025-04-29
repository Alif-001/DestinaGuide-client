// src/utils/auth/useGoogleAuth.js
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./useAuth";

const useGoogleAuth = () => {
  const { user, googleSignIn, loading, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true });
    }
  }, [loading, user, from, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // triggers loading → then user update
      setLoading(false);
    } catch (error) {
      console.error("Google sign-in error:", error);
      if (error) {
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: error.code,
          icon: "error",
          background: "#1e1e1e",
          color: "#fff",
          confirmButtonColor: "#d33",
          confirmButtonText: "Try Again",
          customClass: { popup: "swal2-dark" },
        });
      }
    }
  };

  return { handleGoogleSignIn };
};

export default useGoogleAuth;
