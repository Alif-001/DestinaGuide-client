import React from "react";
import { Outlet } from "react-router-dom";

import BannerCarousel from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      
      <NavBar />
      <div className="container ">
        <BannerCarousel />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
