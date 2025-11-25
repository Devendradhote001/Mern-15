import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import List from "./List";

const TaskContainer = () => {
  let { contextInputValue } = useContext(MyStore);
  console.log("i m in tc->", contextInputValue);

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <h1>Tasks</h1>

      {contextInputValue.map((val, index) => {
        return <List key={index} val={val} id={index} />;
      })}
    </div>
  );
};

export default TaskContainer;
