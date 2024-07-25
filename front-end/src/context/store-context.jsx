import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    } else {
      setCartItem((pre) => ({ ...pre, [itemId]: 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  const storeValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
};
