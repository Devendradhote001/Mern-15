import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import axios from "axios";
import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "users",
              element: <Users />,
              loader: async () => {
                try {
                  let res = await axios.get("https://fakestoreapi.com/users");
                  if (res) {
                    console.log("me api hu...");
                    return res.data;
                  }
                } catch (error) {
                  console.log("error in users api", error);
                }
              },
              hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
              path: "products",
              element: <Product />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
