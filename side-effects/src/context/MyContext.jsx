import { createContext, useState } from "react";

export let YadavJii = createContext();

export const YadavJiKiDukaan = ({ children }) => {
  const [kirana, setKirana] = useState("maida");
  const [count, setCount] = useState(0);

  return (
    <YadavJii.Provider value={{ kirana, count, setCount }}>
      {children}
    </YadavJii.Provider>
  );
};
