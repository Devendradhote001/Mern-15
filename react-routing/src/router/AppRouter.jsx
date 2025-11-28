import React from "react";
import { Route, Routes } from "react-router";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Products from "../components/Products";
import LandingPage from "../components/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/about" element={<About />}>
        <Route path="akn" element={<Products />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
