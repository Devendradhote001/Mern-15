import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { YadavJii, YadavJiKiDukaan } from "./context/MyContext";
import About from "./About";

const App = () => {
  const [count, setCount] = useState(0);
  const [enterAmitabh, setEnterAmitabh] = useState(false);

  let { kirana } = useContext(YadavJii);
  console.log(kirana);

  return (
    <div>
      <h1>hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setEnterAmitabh(!enterAmitabh)}>
        Amitabh ko bhejo
      </button>
      <About />
      <div></div>
    </div>
  );
};

export default App;
