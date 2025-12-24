import React from "react";
import SongCard from "../components/SongCard";
import { songsData } from "../utils/songsData";
import Snowfall from "react-snowfall";

const Songs = () => {
  let songs = songsData;

  return (
    <div className="h-full flex flex-col gap-4 overflow-auto">
      {songs.map((elem, i) => {
        return <SongCard key={i} elem={elem} />;
      })}
    </div>
  );
};

export default Songs;
