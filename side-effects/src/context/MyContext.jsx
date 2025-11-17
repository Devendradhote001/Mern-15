import { createContext } from "react";

export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  let data = "global hu me";
  return <MyStore.Provider value={data}>{children}</MyStore.Provider>;
};
