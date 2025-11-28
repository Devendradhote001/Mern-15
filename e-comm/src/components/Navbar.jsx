import React from "react";
import { NavLink } from "react-router";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="py-4 bg-stone-300 px-8 flex items-center justify-between">
      <h1>E-comm</h1>
      <div className="flex gap-4 text-md">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-gray-500"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-gray-500"
          }
          to="/cart"
        >
          Cart
        </NavLink>
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
