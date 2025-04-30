import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 ">
        <div className="text-center m-4 pb-30  ">
          <h1 className="text-9xl font-extrabold text-primary">404</h1>
          <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
          <p className="mt-2 text-lg text-base-content">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => navigate(-1)} className="btn btn-primary">
              Go Back
            </button>
            <Link to="/" className="btn btn-secondary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default NotFound;
