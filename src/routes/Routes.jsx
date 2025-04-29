import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layout/layout";
import AddTouristSpot from "../pages/AddTouristSpot";
import AllTouristSpots, {
  loader as allTouristSpotsLoader,
} from "../pages/AllTouristSpots";

import Home from "../pages/Home";
import Login from "../pages/Login";
import MyList, { loader as myListLoader } from "../pages/MyList";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import UpdateTouristSpot, {
  loader as updateTouristSpotLoader,
} from "../pages/UpdateTouristSpot";
import ViewDetails, { loader as viewDetailsLoader } from "../pages/ViewDetails";
import PrivateRoute, { PublicRoute } from "./AuthGuards";

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
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "tourist-spots", // 👈 Custom route
        element: (
        
            <AllTouristSpots />
         
        ),
        loader: allTouristSpotsLoader,
      },
      {
        path: "tourist-spots/:id", // 👈 Custom route
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: viewDetailsLoader,
      },
      {
        path: "add-tourist-spot", // 👈 Custom route
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "update-tourist-spot/:id", // 👈 Custom route
        element: (
          <PrivateRoute>
            <UpdateTouristSpot />
          </PrivateRoute>
        ),
        loader: updateTouristSpotLoader,
      },
      {
        path: "/:id/my-list", // 👈 Custom route
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: myListLoader,
      },
    ],
  },
]);

export default Routes;
