import React, { useEffect, useState } from "react";
import Context from "./Context.js";

const getDefaultCart = (data) => {
  let cart = {};
  for (let i = 0; i < data.length; i++) {
    cart[data[i].id] = 0;
  }
  return cart;
};

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : getDefaultCart(data);
  });

  useEffect(() => {
    // Save cart data to localStorage when it changes
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    setCartItem(getDefaultCart(data));
  }, [data]);

  const getCartAmount = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        total += cartItem[item] * itemInfo.price;
      }
    }
    return total;
  };

  const addToCart = (productId) => {
    setCartItem((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const removeFromCart = (productId) => {
    setCartItem((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const ContextValue = {
    data,
    setData,
    cartItem,
    addToCart,
    removeFromCart,
    getCartAmount,
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};
