import React from "react";
import { useEffect } from "react";

const Home = () => {
  let interval = setInterval(() => {
    console.log("hello");
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
