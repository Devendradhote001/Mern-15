import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserState } from "../Context/MyContext";

const PublicRoute = () => {
  let { logInUser } = useContext(UserState);

  if (logInUser) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PublicRoute;
