import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../utils/auth/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // const links = (
  //   <>
  //     <li>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li>
  //       <Link to="/tourist-spots">All Tourist Spots</Link>
  //     </li>
  //     <li>
  //       <Link to="/add-tourist-spot">Add Tourist Spot</Link>
  //     </li>
  //     <li>
  //       <Link to="/my-list">My List</Link>
  //     </li>
  //     <li>
  //       <Link to="/login">Login</Link>
  //     </li>
  //     <li>
  //       <Link to="/register">Register</Link>
  //     </li>
  //   </>
  // );

  // Define links based on auth state
  const commonLinks = [
    { to: "/", label: "Home" },
    { to: "/tourist-spots", label: "All Tourist Spots" },
  ];

  const authLinks = user
    ? [
        ...commonLinks,
        { to: "/add-tourist-spot", label: "Add Tourist Spot" },
        { to: "/my-list", label: "My List" },
      ]
    : [
        ...commonLinks,
        { to: "/login", label: "Login" },
        { to: "/register", label: "Register" },
      ];

  return (
    <div className="navbar bg-base-100 shadow-sm container">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {authLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand */}
        <Link to="/" className="btn btn-ghost text-xl">
          DestinaGuide
        </Link>
      </div>

      {/* Desktop links */}
      <div className=" navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {authLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout button if authenticated */}
      {user && (
        <div className="navbar-end">
          <button
            className="btn btn-error text-white font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
