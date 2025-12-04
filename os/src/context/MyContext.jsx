import { createContext, useState } from "react";

export const AppState = createContext();

export const ContextProvider = ({ children }) => {
  const [chrome, setChrome] = useState(false);
  const [bin, setBin] = useState(false);
  const [fileExp, setFileExp] = useState(false);

  return (
    <AppState.Provider
      value={{ chrome, setBin, setChrome, setFileExp, fileExp, bin }}
    >
      {children}
    </AppState.Provider>
  );
};
