import { createContext, useState } from "react";

export let MyTask = createContext();

export const MyTaskContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [editedId, setEditedId] = useState(null);

  return (
    <MyTask.Provider value={{ allTasks, setAllTasks, editedId, setEditedId }}>
      {children}
    </MyTask.Provider>
  );
};
