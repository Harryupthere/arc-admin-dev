import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages";
import RouteArr from "../configuration/getRoutes";
import Main from "../pages/main";

const router = createBrowserRouter([
  {
    name: "Login",
    path: "/login",
    key: "login",
    route: "/",
    element: <Login />,
  },


  {
    path: "/",
    element: <Main />,
    children: RouteArr,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
