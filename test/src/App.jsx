import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "./context/MyContext";
import TaskContainer from "./components/TaskContainer";
import { nanoid } from "nanoid";

const App = () => {
  let { setContextInputValue, contextInputValue, editedId } =
    useContext(MyStore);

  console.log("app me->", editedId);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let findUpdatedTask = contextInputValue.find(
      (elem) => elem.id === editedId
    );
    if (findUpdatedTask) {
      setInputValue(findUpdatedTask.task);
    }
  }, [editedId]);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    if (editedId) {
      let updatedTask = contextInputValue.find((elem) => elem.id === editedId);
      updatedTask.task = inputValue;

      let arr = [...contextInputValue];
      setContextInputValue(arr);
      return;
    }

    setContextInputValue((prev) => [
      ...prev,
      { id: nanoid(), task: inputValue },
    ]);

    setInputValue("");
  };

  return (
    <div>
      <input
        value={inputValue}
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
