import React, { useCallback, useEffect, useMemo, useState } from "react";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);

  const calc = useMemo(() => {
    console.log("heavy calc running...");
    let a = count;
    let res;
    for (let i = 1; i < 1000000000; i++) {
      res = a * i;
    }
    return res;
  }, []);

  const greet = useCallback(() => {
    console.log("good afternoon");
  }, []);

  // const greet = () => {
  //   console.log("good afternook");
  // };

  // memoization

  // 1.React.memo
  // 2. useCallback
  // 3. usememo

  // code splitting....

  // Suspense, fallback, lazy;

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
