import React, { useContext, useEffect, useState } from "react";
import { MyTask } from "../context/MyContext";
import { nanoid } from "nanoid";

const Input = () => {
  let { setAllTasks, allTasks, editedId } = useContext(MyTask);

  const [taskInput, setTaskInput] = useState("");
  console.log(taskInput);

  useEffect(() => {
    if (editedId) {
      let findUpdatedValue = allTasks.find((val) => val.id === editedId) || "";
      setTaskInput(findUpdatedValue.task);
    }
  }, [editedId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (taskInput === "") {
      return;
    }

    if (editedId) {
      let updatedTask = allTasks.find((elem) => elem.id === editedId);
      updatedTask.task = taskInput;

      let updateTasksArr = allTasks.filter((val) => val.id === editedId);

      let upArr = [...allTasks, updatedTask];
      setAllTasks(upArr);
      localStorage.setItem("tasks", JSON.stringify(upArr));
      setTaskInput = "";
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
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border py-2 px-4 text-xl rounded outline-none"
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
