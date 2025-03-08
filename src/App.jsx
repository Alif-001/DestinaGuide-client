import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-red-500">DestinaGuide</h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
