import React, { useContext } from "react";
import { UserState } from "../Context/MyContext";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let { logInUser } = useContext(UserState);

  if (!logInUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
