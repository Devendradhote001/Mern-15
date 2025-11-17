import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [count, setCount] = useState(0);
  const [enterAmitabh, setEnterAmitabh] = useState(false);

  let cd = useContext(MyStore);
  console.log(cd);

  useEffect(() => {
    console.log("asj,gasdjfgb");
  }, [enterAmitabh]);

  return (
    <div>
      <h1>hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setEnterAmitabh(!enterAmitabh)}>
        Amitabh ko bhejo
      </button>
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default App;
