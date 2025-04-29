import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import useAuth from "../utils/auth/useAuth";

const Layout = () => {
  const { loading } = useAuth();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {loading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600"></div>
        </div>
      )}
      <NavBar />
      <div className="flex-grow flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
