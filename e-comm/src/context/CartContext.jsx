import { createContext, useState } from "react";

export let MyCart = createContext();

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  return (
    <MyCart.Provider value={{ cartItems, setCartItems }}>
      {children}
    </MyCart.Provider>
  );
};
