import React from "react";

const Register = ( prop ) => {
  console.log(prop);
  return (
    <div>
      <h1>Register form</h1>

      <form action="">
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
          placeholder="FullName"
        />
        <input type="text" placeholder="username" />

        <input type="text" placeholder="password" />
        <input type="submit" value="Login" />
      </form>

      <p>
        Alreday have an account?{" "}
        <span onClick={() => setToggle((prev) => !prev)}>Login here</span>
      </p>
    </div>
  );
};

export default Register;
