import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>
  },
]);

export default Routes;