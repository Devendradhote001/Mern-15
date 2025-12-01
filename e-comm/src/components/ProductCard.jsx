import React, { useContext } from "react";
import { MyCart } from "../context/CartContext";

const ProductCard = ({ elem, location }) => {
  let { setCartItems } = useContext(MyCart);

  const handleCart = () => {
    setCartItems((prev) => [...prev, { product: elem, quatity: 1 }]);
    alert("product added to cart");
  };

  return (
    <div className="h-[40%] w-[23%] p-4 rounded-xl border flex flex-col items-center gap-5">
      <div className="h-[60%] ">
        <img className="object-cover h-[100%]" src={elem.image} alt="" />
      </div>
      <div className="w-full">
        <h3>title</h3>
        <p>Perice</p>
        <div className="flex justify-between items-center">
          <button className="py-2 px-6 cursor-pointer bg-blue-700 text-white rounded-md">
            Buy now
          </button>

          {location && location === "/cart" ? (
            ""
          ) : (
            <button
              onClick={handleCart}
              className="py-2 px-6 cursor-pointer bg-green-700 text-white rounded-md"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
