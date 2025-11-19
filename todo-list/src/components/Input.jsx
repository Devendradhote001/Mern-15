import React, { useContext, useState } from "react";
import { MyTask } from "../context/MyContext";
import { nanoid } from "nanoid";

const Input = () => {
  let { setAllTasks, allTasks } = useContext(MyTask);

  const [taskInput, setTaskInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let updatedArr = [...allTasks, { id: nanoid(), task: taskInput }];
    setAllTasks(updatedArr);
    localStorage.setItem("tasks", JSON.stringify(updatedArr));
    setTaskInput("");
  };

  return (
    <div className="w-[60%] ">
      <form onSubmit={handleFormSubmit} className="flex gap-5" action="">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border py-2 px-4 text-xl rounded outline-none"
          type="text"
          placeholder="Enter task.."
        />
        <input
          className="py-3 px-6 bg-blue-600 rounded text-white cursor-pointer"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default Input;
