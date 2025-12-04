import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <aside>sidebar</aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
