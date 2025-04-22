import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen  flex flex-col bg-base-100">
        <div className="flex-grow flex  ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
