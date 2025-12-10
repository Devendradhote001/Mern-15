import { createContext, useState } from "react";

export const UserState = createContext();

export const ContextProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    () => JSON.parse(localStorage.getItem("reg user")) || []
  );
  const [logInUser, setLogInUser] = useState(
    () => JSON.parse(localStorage.getItem("log user")) || null
  );


  const logoutUser = () => {
    localStorage.removeItem("log user");
    setLogInUser(null);
  };

  return (
    <UserState.Provider
      value={{
        logInUser,
        setLogInUser,
        registerUsers,
        logoutUser,
        setRegisterUsers,
      }}
    >
      {children}
    </UserState.Provider>
  );
};
