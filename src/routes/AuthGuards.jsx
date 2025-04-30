// private route component

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utils/auth/useAuth";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    document.body.style.overflow = "hidden"; // Prevent scrolling during loading
    return (
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600"></div>
      </div>
    );
  } else {
    document.body.style.overflow = "auto"; // Restore scrolling after loading
  }

  if (!loading && !user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname, message: "Please log in first." }}
      />
    );
  }

  return children;
}

export function PublicRoute({ children }) {
  const { user, loading } = useAuth();const location = useLocation();

   const from = location.state?.from || "/";

  if (loading) {
    document.body.style.overflow = "hidden"; // Prevent scrolling during loading
    return (
      <div className="h-screen w-screen z-50 flex items-center justify-center">
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-purple-600"></div>
        </div>
      </div>
    );
  } else {
    document.body.style.overflow = "auto"; // Restore scrolling after loading
  }

  if (user) {
    return <Navigate to={from} replace />;
  }

  return children;
}
