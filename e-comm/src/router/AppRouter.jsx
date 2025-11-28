import React from "react";
import { Routes, Route } from "react-router";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
