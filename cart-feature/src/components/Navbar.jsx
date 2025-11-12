import React from "react";

const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="h-16 w-full bg-gray-200 flex items-center justify-between px-10">
      <div>
        <h1 className="text-3xl font-bold">Carts</h1>
      </div>
      <div className="flex items-center gap-6">
        <p
          onClick={() => setIsCartOpen((prev) => !prev)}
          className="text-lg text-blue-600 cursor-pointer"
        >
          Cart
        </p>
        <p className="text-lg text-blue-600 cursor-pointer">Profile</p>
      </div>
    </div>
  );
};

export default Navbar;
