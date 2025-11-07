import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="w-100 flex flex-col gap-6 items-center">
      <h1 className="text-xl">Login Form</h1>

      <form
        className="flex flex-col gap-4 border border-gray-200 p-6 rounded-lg shadow-lg"
        action=""
      >
        <input
          className="border px-4 py-2 rounded-lg"
          type="text"
          placeholder="username"
        />
        <input
          className="border px-4 py-2 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button
          className="px-4 py-3 bg-blue-700 rounded-lg text-white"
          type="submit"
        >
          Register
        </button>
        <p className="text-xl">
          Don't have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
