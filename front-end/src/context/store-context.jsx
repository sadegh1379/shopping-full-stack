import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
export const StoreContextProvider = ({ children }) => {
  const storeValue = {
    food_list,
  };
  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
};
