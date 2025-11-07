import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [usersData, setUsersData] = useState([]);

  return (
    <div className="h-screen w-full flex gap-5 flex-col items-center justify-center">
      <h1 className="text-2xl font-bold ">Authentication</h1>
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register
          setToggle={setToggle}
          setUsersData={setUsersData}
          usersData={usersData}
        />
      )}
    </div>
  );
};

export default App;
