import React, { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  let { user } = useSelector((state) => state.auth);
  if (user) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default PublicRoute;
