import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { useSelector } from "react-redux";

const AuthPage = () => {
  let { toggle } = useSelector((state) => state.toggle);

  return <div>{toggle ? <Login /> : <Register />}</div>;
};

export default AuthPage;
