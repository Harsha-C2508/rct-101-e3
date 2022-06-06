import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const {products,decrease,increase} = useContext(CartContext)
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button">Add</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={increase}>+</button>
        <span data-cy="product-count">
          {products}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={decrease} >-</button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
