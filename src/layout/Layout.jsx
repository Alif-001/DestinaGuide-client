import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import useAuth from "../utils/auth/useAuth";

const Layout = () => {
  const { loading } = useAuth();

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600"></div>
        </div>
      )}
      <NavBar />
      <div className="min-h-screen flex flex-col items-center bg-base-100">
        <div className="flex-grow flex">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
