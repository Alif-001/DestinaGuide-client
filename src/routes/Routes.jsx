import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import AllTouristSpots from "../pages/AllTouristSpots";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import App from "../App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 👈 Layout is root wrapper
    errorElement: <NotFound />,
    children: [
      {
        path: "/", // 👈 App is at /home
        element: <App />,
        children: [
          { index: true, element: <Home /> }, // 👈 Home is at /home
        ],
      },
      {
        path: "tourist-spots", // 👈 Custom route
        element: <AllTouristSpots />,
      },
    ],
  },
]);

export default Routes;
