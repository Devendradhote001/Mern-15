import { useState } from "react";
import { createContext } from "react";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [contextInputValue, setContextInputValue] = useState([]);
  console.log("i m in context", contextInputValue);

  const [editedId, setEditedId] = useState(null);
  console.log(editedId);

  return (
    <MyStore.Provider
      value={{ setContextInputValue, contextInputValue, editedId, setEditedId }}
    >
      {children}
    </MyStore.Provider>
  );
};
