import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLAyout from "../layout/MainLAyout";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLAyout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
