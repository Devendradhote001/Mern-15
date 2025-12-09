import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ val }) => {
  let navigate = useNavigate();
  return (
    <div className="h-[50%] w-[23%] border border-gray-200 rounded p-4 shadow-md">
      <div
        onClick={() => navigate(`/home/products/details/${val.id}`)}
        className="h-[60%] w-full"
      >
        <img
          className="object-fit h-full w-full rounded"
          src={val.image}
          alt="image here"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="text-lg font-semibold">
          {val.title?.length > 15
            ? `${val.title?.slice(0, 15)} ... `
            : val.title}
        </h1>
        <p>${val.price}</p>
        <div className="flex justify-between w-full">
          <button className="py-2 px-4 text-white cursor-pointer bg-green-500 rounded">
            Buy Now
          </button>
          <button className="py-2 px-4 text-white cursor-pointer bg-blue-500 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
