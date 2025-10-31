import { useState } from "react";
import Contact from "./Contact";

const App = () => {
  let [count, setCount] = useState(10);
  const [greet, setGreet] = useState("good afternoon");

  let getDataFromChild = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Hello this is count - {count} </h1>
      <p>Greet - {greet}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <Contact greet={greet} getDataFromChild={getDataFromChild} />
    </div>
  );
};

export default App;
