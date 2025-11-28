import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-4 flex gap-5">
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
