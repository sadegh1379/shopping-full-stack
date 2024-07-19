import { createContext } from "react";

export const StoreContext = createContext(null);
export const StoreContextProvider = ({ children }) => {
  const storeValue = {};
  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
};
