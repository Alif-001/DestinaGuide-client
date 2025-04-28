import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layout/layout";
import AllTouristSpots,{loader as allTouristSpotsLoader} from "../pages/AllTouristSpots";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import ViewDetails from "../pages/ViewDetails";
import AddTouristSpot from "../pages/AddTouristSpot";
import MyList,{loader as myListLoader} from "../pages/MyList";
import Register from "../pages/Register";
import UpdateTouristSpot from "../pages/UpdateTouristSpot";

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
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "tourist-spots", // 👈 Custom route
        element: <AllTouristSpots />,
        loader: allTouristSpotsLoader,
      },
      {
        path: "tourist-spots/:id", // 👈 Custom route
        element: <ViewDetails />,
      },
      {
        path: "add-tourist-spot", // 👈 Custom route
        element: <AddTouristSpot />,
      },
      {
        path: "add-tourist-spot", // 👈 Custom route
        element: <UpdateTouristSpot />,
      },
      {
        path: "/:id/my-list", // 👈 Custom route
        element: <MyList />,
        loader: myListLoader,
      },
    ],
  },
]);

export default Routes;
