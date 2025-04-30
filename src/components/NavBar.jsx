import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../utils/auth/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const commonLinks = [
    { to: "/", label: "Home" },
    { to: "/tourist-spots", label: "All Tourist Spots" },
  ];

  const authLinks = user
    ? [
        ...commonLinks,
        { to: "/add-tourist-spot", label: "Add Tourist Spot" },
        { to: `/${user.uid}/my-list`, label: "My List" },
      ]
    : [
        ...commonLinks,
        { to: "/login", label: "Login" },
        { to: "/register", label: "Register" },
      ];

  return (
    <div
      className="navbar bg-base-100 shadow-sm container"
      style={{
        backgroundColor: "var(--card-bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="navbar-start">
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
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          <h2 className="text-2xl font-bold text-gray-400">
            Destina<span className="font-bold text-purple-400">Guide</span>
          </h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex lg:justify-center">
        <ul className="menu menu-horizontal px-1">
          {authLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <button className="btn btn-outline" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        {user && (
          <button
            className="btn btn-error text-white font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
