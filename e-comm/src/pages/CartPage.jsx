import React, { useContext } from "react";
import { MyCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router";

const CartPage = () => {
  let { cartItems } = useContext(MyCart);

  let location = useLocation();
  return (
    <div>
      <h1>I m cart</h1>
      {cartItems.map((val) => {
        return (
          <ProductCard key={val.id} elem={val} location={location.pathname} />
        );
      })}
    </div>
  );
};

export default CartPage;
