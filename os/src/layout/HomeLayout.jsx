import React from "react";
import { NavLink, Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Link />
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
