import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Play, SkipBack, SkipForward } from "lucide-react";
import Player from "../components/Player";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  let { currentSong } = useSelector((state) => state.song);

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
      {/* {currentSong ? <Player /> : ""} */}
      <Player />
    </div>
  );
};

export default HomeLayout;
