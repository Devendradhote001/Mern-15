import React, { useRef } from "react";
import axios from "axios";
import { fetchUsers } from "./apis/userApis";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  let audioRef = useRef();
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      let res = fetchUsers();
      if (res) {
        console.log(res);
        setUsers(res);
      }
    } catch (error) {
      console.log("error in fetch", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>hello</h1>

      <audio ref={audioRef} src="./music/jsm.mp3"></audio>

      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Pause</button>
    </div>
  );
};

export default App;
