import { createContext, useState } from "react";
import { dress_list } from "../assets/assets";

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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = dress_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const storeValue = {
    dress_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
};
