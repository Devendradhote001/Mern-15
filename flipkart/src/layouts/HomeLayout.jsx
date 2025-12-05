import React from "react";
import { NavLink, Outlet, useLocation } from "react-router";

const HomeLayout = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="h-screen w-full flex">
      <aside className="w-[16%] border-r p-4 border-gray-400 flex flex-col">
        <div>
          <img
            className="w-50"
            src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 ml-10 text-lg">
          <NavLink
            className={({ isActive }) =>
              isActive && pathname === "/home"
                ? "text-black font-semibold"
                : "text-gray-400"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-gray-400"
            }
            to="/home/users"
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-gray-400"
            }
            to="/home/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-gray-400"
            }
            to="/home/cart"
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-gray-400"
            }
            to="/home/cart"
          >
            Logout
          </NavLink>
        </div>
      </aside>
      <div className="w-[84%] p-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
