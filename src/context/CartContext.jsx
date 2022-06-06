import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count,setCount]=useState(0);
  const [products,setProduct]=useState(1)
  const addToCart=()=>{
    setCount(count+1);
  }
  const increase=()=>{
    setProduct(products+1);
  }
  const decrease=()=>{
    setProduct(products-1);
  }
  return <CartContext.Provider value={{count,addToCart,products,decrease,increase}}>{children}</CartContext.Provider>;
};
