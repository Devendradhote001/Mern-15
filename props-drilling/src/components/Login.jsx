import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div>
      <h1>Login form</h1>

      <form action="">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <input type="submit" value="Login" />
      </form>

      <p>
        Dont have an account? <span onClick={() => setToggle(prev => !prev)}>Register here</span>
      </p>
    </div>
  );
};

export default Login;
