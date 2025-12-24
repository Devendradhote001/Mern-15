import { Pause, Play } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, playAndPause } from "../features/songSlice";

const SongCard = ({ elem }) => {
  const dispatch = useDispatch();

  let { currentSong, isPlaying } = useSelector((state) => state.song);

  return (
    <div className="h-[14%] flex px-10 items-center justify-between rounded-xl w-full border border-gray-400">
      <div className="flex gap-10">
        <div className="h-15 w-15 overflow-hidden bg-red-600 rounded-full">
          <img
            className="h-full w-full"
            src="https://thumbs.dreamstime.com/b/modern-logo-design-music-production-company-black-treble-clef-note-solid-yellow-background-minimalist-style-d-render-symbol-390904895.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-semibold text-md">{elem.name}</h1>
          <p className="text-gray-400">{elem.artist}</p>
        </div>
      </div>

      {currentSong?.id === elem.id ? (
        isPlaying ? (
          <div
            onClick={() => dispatch(playAndPause())}
            className="h-15 w-15 rounded-full flex justify-center cursor-pointer items-center bg-black text-white"
          >
            <Pause />
          </div>
        ) : (
          <div
            onClick={() => dispatch(playAndPause())}
            className="h-15 w-15 rounded-full flex justify-center cursor-pointer items-center bg-black text-white"
          >
            <Play />
          </div>
        )
      ) : (
        <div
          onClick={() => dispatch(addSong(elem))}
          className="h-15 w-15 rounded-full flex justify-center cursor-pointer items-center bg-black text-white"
        >
          <Play />
        </div>
      )}
    </div>
  );
};

export default SongCard;
