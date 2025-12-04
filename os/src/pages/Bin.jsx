import React, { useContext } from "react";
import { AppState } from "../context/MyContext";

const Bin = () => {
  let { setBin, ss } = useContext(AppState);
  return (
    <div className="">
      <h1>bin</h1>
    </div>
  );
};

export default Bin;
