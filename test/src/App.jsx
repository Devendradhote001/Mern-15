import React, { useContext, useState } from "react";
import { MyStore } from "./context/MyContext";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  let { setContextInputValue, contextInputValue } = useContext(MyStore);

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    setContextInputValue((prev) => [...prev, inputValue]);
  };

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter task.."
      />
      <br />
      <br />
      <button onClick={handleAdd}>Add</button>

      <TaskContainer />
    </div>
  );
};

export default App;
