import React from "react";
import SongCard from "../components/SongCard";

const Songs = () => {
  const songsData = [
    {
      id: 1,
      name: "Ankhiya gulaab",
      artist: "Mitraz",
      src: "./ankhiya-gulaab.mp3",
    },
    {
      id: 2,
      name: "Channa-mereya",
      artist: "Arijit singh",
      src: "./channa-mereya.mp3",
    },
    {
      id: 3,
      name: "Dekha-tenu",
      artist: "Mitraz",
      src: "./Dekhha-tenu.mp3",
    },
    {
      id: 4,
      name: "Ishq na karna",
      artist: "Mitraz",
      src: "./ink.mp3",
    },
    {
      id: 5,
      name: "Hamari adhuri kahani",
      artist: "Arijit singh",
      src: "./hak.mp3",
    },
    {
      id: 6,
      name: "Jana samjho na",
      artist: "Mitraz",
      src: "./jsn.mp3",
    },
  ];

  return (
    <div className="h-full flex flex-col gap-4 overflow-auto">
      {songsData.map((elem, i) => {
        return <SongCard key={i} elem={elem} />;
      })}
    </div>
  );
};

export default Songs;
