import React, { useContext } from "react";
import Chrome from "../pages/Chrome";
import Bin from "../pages/Bin";
import FileExplorer from "../pages/FileExplorer";
import { AppState } from "../context/MyContext";

const MainLAyout = () => {
  let { setBin, setChrome, setFileExp, chrome, bin, fileExp } =
    useContext(AppState);

  return (
    <div className="h-screen text-white">
      <div className="h-[93%] w-full bg-[url('https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-2880x1800-5630.jpg')] bg-cover bg-center">
        {chrome && <Chrome  />}
        {bin && <Bin />}
        {fileExp && <FileExplorer />}
      </div>
      <footer className="h-[7%] bg-black flex justify-between text-white">
        <div></div>
        <div className="flex gap-5">
          <div onClick={() => setChrome(true)}>
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=63785&format=png&color=000000"
              alt=""
            />
          </div>
          <div onClick={() => setBin(true)}>
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=74176&format=png&color=000000"
              alt=""
            />
          </div>
          <div onClick={() => setFileExp(true)}>
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=3e0VGst16Oy4&format=png&color=000000"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default MainLAyout;
