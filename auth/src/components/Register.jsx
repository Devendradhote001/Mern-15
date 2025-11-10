import React, { useState } from "react";

const Register = ({ setToggle, setUsersData, usersData }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedArr = [...usersData, formData];
    setUsersData((prev) => [...prev, formData]);
    localStorage.setItem("user", JSON.stringify(updatedArr));
    alert("data saved ");

    setFormData({
      fullname: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="w-100 text-center flex flex-col gap-6">
      <h1 className="text-xl">Registration Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-gray-200 p-6 rounded-lg shadow-lg"
        action=""
      >
        <input
          value={formData.fullname}
          name="fullname"
          onChange={handleChange}
          className="border px-4 py-2 rounded-lg"
          type="text"
          placeholder="Full name"
        />
        <input
          value={formData.username}
          name="username"
          onChange={handleChange}
          className="border px-4 py-2 rounded-lg"
          type="text"
          placeholder="username"
        />
        <input
          value={formData.password}
          name="password"
          onChange={handleChange}
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
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
