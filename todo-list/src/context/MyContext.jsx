import { createContext, useState } from "react";

export let MyTask = createContext();

export const MyTaskContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  console.log(allTasks);

  return (
    <MyTask.Provider value={{ allTasks, setAllTasks }}>
      {children}
    </MyTask.Provider>
  );
};
