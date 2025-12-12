import React, { useCallback, useEffect, useMemo, useState } from "react";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);

  const maths = () => {
    console.log("calculation fun runing....");
    let a = 1;
    for (let i = 1; i < 1000000000; i++) {
      a = a + i;
    }
    return a;
  };

  let getVal = useMemo(maths, []);

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
