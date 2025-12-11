import React, { useState, lazy } from "react";
import About from "./components/About";
import { Suspense } from "react";
import { useCallback } from "react";
import { useDebugValue } from "react";
// import Product from "./components/Product";
let Product = lazy(() => import("./components/Product"));

const App = () => {
  const [inpValue, setInpValue] = useState("");

  let val = useDebugValue(inpValue, 1000);

  const debounse = useCallback(() => {
    setTimeout(() => {
      greet();
    }, 2000);
  }, []);

  const greet = () => {
    console.log("good afternoon");
  };

  const handleChange = (e) => {
    setInpValue(e.target.value);
    debounse();
  };

  // code splitting

  // 1.Suspense
  // 2fallback
  // 3 lazy

  // throttling
  // 1. debouncing

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setToggle((prev) => !prev)}>Show product</button>

      <About />

      <input
        value={inpValue}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Product />
      </Suspense>
    </div>
  );
};

export default App;
