import { createContext } from "react";
import { useState } from "react";
import { food_list } from "./assets/frontend_assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newQuantity = prev[itemId] - 1;
      if (newQuantity > 0) {
        return { ...prev, [itemId]: newQuantity };
      } else {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  // const getTotals = () => {
  //   let subtotal = 0;
  //   let deliveryFee = 2;
  //   let total = 0;
  //   for (const [itemId, quantity] of Object.entries(cartItems)) {
  //     const item = food_list.find((item) => item._id === itemId);
  //     subtotal += item.price * quantity;
  //   }
  //   total = subtotal + deliveryFee;
  //   return { subtotal, deliveryFee, total };
  // }


const getTotals = () => {
  let subtotal = 0;

  for (const [itemId, quantity] of Object.entries(cartItems)) {
    const item = food_list.find((item) => item._id === itemId);
    if (item && quantity > 0) {
      subtotal += item.price * quantity;
    }
  }

  const deliveryFee = subtotal * 0.2; 
  const total = subtotal + deliveryFee;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    deliveryFee: Number(deliveryFee.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
};

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotals,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;


