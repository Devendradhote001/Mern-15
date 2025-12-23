import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Play, SkipBack, SkipForward } from "lucide-react";

const HomeLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />

      <div className="flex h-[80%]">
        <div className="w-[20%] p-4 border-r border-gray-400">
          <h1>Favourite</h1>
          <h1>Liked songs</h1>
        </div>
        <div className="w-[60%] p-4 border-r border-gray-400">
          <Outlet />
        </div>
        <div className="w-[20%] p-4">Right</div>
      </div>
      <div className="w-full h-[12%] bg-black flex justify-between items-center">
        <div></div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-white flex items-center gap-10">
            <SkipBack />
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer text-black">
              <Play />
            </div>
            <SkipForward />
          </div>
          <div className="w-100 h-2 rounded-full bg-white">
            <div className="w-[50%] h-full bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeLayout;
