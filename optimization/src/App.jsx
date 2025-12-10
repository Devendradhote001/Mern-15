import React, { useCallback, useEffect, useMemo, useState } from "react";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);

  const greet = useCallback(() => {
    console.log("good afternoon");
  }, []);

  // const greet = () => {
  //   console.log("good afternook");
  // };

  console.log("app rendering...");

  return (
    <div>
      <h1>Hello app, count is - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <About greet={greet} />
    </div>
  );
};

export default App;
