import React, { useContext, useEffect, useRef, useState } from "react";
import { MyTask } from "../context/MyContext";
import { nanoid } from "nanoid";

const Input = () => {

  const inputRef = useRef(null);
  let { setAllTasks, allTasks, editedId, setEditedId } = useContext(MyTask);

  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    if (editedId) {
      let filteredArr = allTasks.find((elem) => elem.id === editedId);
      setTaskInput(filteredArr?.task);
      inputRef.current.focus();
    }
  }, [editedId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (taskInput === "") {
      return;
    }

    if (editedId) {
      let updatedArr = allTasks.find((val) => val.id === editedId);
      updatedArr.task = taskInput;

      let upArr = [...allTasks];
      localStorage.setItem("tasks", JSON.stringify(upArr));
      setAllTasks(upArr);
      setTaskInput("");
      return;
    }

    let updatedArr = [...allTasks, { id: nanoid(), task: taskInput }];
    setAllTasks(updatedArr);
    localStorage.setItem("tasks", JSON.stringify(updatedArr));
    setTaskInput("");
  };

  return (
    <div className="w-[60%] ">
      <form onSubmit={handleFormSubmit} className="flex gap-5" action="">
        <input
          ref={inputRef}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className={`border py-2 px-4 text-xl rounded outline-none ${
            editedId ? "focus:outline-2" : ""
          }`}
          type="text"
          placeholder="Enter task.."
        />
        {editedId ? (
          <input
            className="py-3 px-6 bg-blue-600 rounded text-white cursor-pointer"
            type="submit"
            value="Update"
          />
        ) : (
          <input
            className="py-3 px-6 bg-blue-600 rounded text-white cursor-pointer"
            type="submit"
            value="Add"
          />
        )}
      </form>
    </div>
  );
};

export default Input;
