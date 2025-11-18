import React, { useContext } from "react";
import { YadavJii } from "./context/MyContext";

const About = () => {
  let { count, setCount } = useContext(YadavJii);

  return (
    <div>
      <h1>about</h1>
      <h1>count is - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>incre</button>
    </div>
  );
};

export default About;
