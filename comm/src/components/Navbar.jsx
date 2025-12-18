import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-[10%] flex items-center justify-between px-10 border-b border-gray-400">
      <h1 className="text-2xl font-bold">Logo</h1>
      <div className="flex gap-10 text-xl font-semibold">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/users">users</NavLink>
      </div>
      <div className="flex gap-6">
        <p>Profile</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
