import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default AuthLayout;
