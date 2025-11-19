import React, { useContext } from "react";
import { MyTask } from "../context/MyContext";

const List = ({ elem }) => {
  let { allTasks, setAllTasks } = useContext(MyTask);

  const handleDelete = () => {
    let filteredArr = allTasks.filter((val) => val.id !== elem.id);
    localStorage.setItem("tasks", JSON.stringify(filteredArr));
    setAllTasks(filteredArr);
    alert("task deleted");
  };

  return (
    <div className="w-full flex justify-between items-center py-4 px-8 bg-gray-200 rounded">
      <p>{elem.task}</p>
      <div className="flex gap-5">
        <button className="py-2 px-4 rounded cursor-pointer bg-green-600 text-white">
          Update
        </button>
        <button
          onClick={handleDelete}
          className="py-2 px-4 rounded cursor-pointer bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;



/*
1. make three componenets-> input with button, taks-container, list of tasks.
2. make context of out all tasks and inside the context make
usetsate of alltasks initrilize with empty array
3. add tasks in input componenet on form submit 
4. localstorage me update karo or context me bane usetate
ko bhi btao pehle localstorage ko dekho
5. simple task-container me data get kro form context and 
show karado list componenet me.
 */