import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);

  return <div>{toggle ? <Login /> : <Register />}</div>;
};

export default AuthLayout;
