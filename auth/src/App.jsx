import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [usersData, setUsersData] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });

  return (
    <div className="h-screen w-full flex gap-5 flex-col items-center justify-center">
      <h1 className="text-2xl font-bold ">Authentication</h1>
      {toggle ? (
        <Login setToggle={setToggle} usersData={usersData} />
      ) : (
        <Register
          setToggle={setToggle}
          setUsersData={setUsersData}
          usersData={usersData}
        />
      )}
      <div>
        {!toggle
          ? usersData.map((elem, i) => (
              <h1 key={i} className="text-2xl">
                {elem.fullname}
              </h1>
            ))
          : null}
      </div>
    </div>
  );
};

export default App;
