import React, { useContext } from "react";
import List from "./List";
import { MyTask } from "../context/MyContext";

const TaskContainer = () => {
  let { allTasks } = useContext(MyTask);

  return (
    <div className="w-full h-100 overflow-y-auto border border-dashed p-5 flex flex-col gap-4 items-center">
      {/* <h1 className="text-2xl text-red-700">No Tasks added</h1> */}
      {allTasks.map((elem) => {
        return <List key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

export default TaskContainer;
