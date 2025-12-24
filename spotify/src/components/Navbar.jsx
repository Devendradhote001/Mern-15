import React, { useEffect, useState } from "react";
import { songsData } from "../utils/songsData";

const Navbar = () => {
  let songs = songsData;

  const [searchText, setSearchText] = useState("");
  console.log("search->", searchText);
  const searchSongs = () => {
    let searchSongs = songs.filter((elem) =>
      elem.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
    console.log(searchSongs);
  };

  useEffect(() => {
    searchSongs();
  }, [searchText]);

  return (
    <div className="h-[8%] w-full bg-black flex items-center justify-between px-10">
      <div className="h-8">
        <img
          className="h-full"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
          alt="logo"
        />
      </div>
      <div>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="text-white w-100 py-3 px-6 rounded-full flex items-center bg-[#1F1F1F]"
          type="text"
          placeholder="Serach..."
        />
      </div>
      <div>
        <button className="px-4 py-2 bg-white rounded-full cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
