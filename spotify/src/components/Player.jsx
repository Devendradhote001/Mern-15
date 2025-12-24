import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, playAndPause } from "../features/songSlice";
import moment from "moment";
import { songsData } from "../utils/songsData";

const Player = () => {
  let songs = songsData;

  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  let audioRef = useRef();
  let { currentSong, isPlaying } = useSelector((state) => state.song);

  let nextSong;

  const handleForwardSong = () => {
    if (currentSong.id + 1 === songs.length) {
      console.log("hello....");
      nextSong = songs[0];
      console.log(nextSong);
      dispatch(addSong(nextSong));
      return;
    }

    nextSong = songs[currentSong?.id + 1];
    dispatch(addSong(nextSong));
  };

  useEffect(() => {
    if (currentSong && isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  const handleUpdatetime = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    return moment.utc(time * 1000).format("mm:ss");
  };

  const handleSeekTime = (e) => {
    let newT = e.target.value;
    audioRef.current.currentTime = newT;
    setCurrentTime(newT);
  };

  return (
    <div className="w-full h-[12%] px-10 bg-black flex justify-between items-center">
      <div className="text-white w-[20%]">
        <h1 className="font-semibold text-xl">{currentSong?.name}</h1>
        <p>{currentSong?.artist}</p>
      </div>
      <div className="flex w-[60%] flex-col justify-center items-center gap-6">
        <div className="text-white flex items-center gap-10">
          <SkipBack />

          {isPlaying ? (
            <div
              onClick={() => dispatch(playAndPause())}
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer text-black"
            >
              <Pause />
            </div>
          ) : (
            <div
              onClick={() => dispatch(playAndPause())}
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer text-black"
            >
              <Play />
            </div>
          )}

          <SkipForward onClick={handleForwardSong} />
        </div>

        <div className="text-white flex items-center gap-4">
          <h1>{formatTime(currentTime)}</h1>
          <div className="w-100 h-2 relative rounded-full bg-white">
            <input
              min={"0"}
              max={duration || 0}
              value={currentTime}
              onChange={handleSeekTime}
              className="absolute h-full w-full"
              type="range"
            />
          </div>
          <h1>{formatTime(duration)}</h1>
        </div>
      </div>
      <div className="w-[20%]"></div>
      <audio
        onTimeUpdate={handleUpdatetime}
        ref={audioRef}
        src={currentSong?.src}
      ></audio>
    </div>
  );
};

export default Player;
