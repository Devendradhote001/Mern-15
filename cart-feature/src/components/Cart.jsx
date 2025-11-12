import React from "react";
import ProductCard from "./ProductCard";

const Cart = ({ cartsItems }) => {
  return (
    <div className="h-[90%] flex p-8 flex-wrap absolute top-15 w-full bg-white">
      {cartsItems.length ? (
        cartsItems.map((elem) => {
          return <ProductCard elem={elem} />;
        })
      ) : (
        <h1 className="text-4xl self-center">No items added</h1>
      )}
    </div>
  );
};

export default Cart;
