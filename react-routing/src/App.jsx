import React from "react";
import Contact from "./components/Contact";
import AppRouter from "./router/AppRouter";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <div>
        <a href="/">Home</a>
        <a href="/about">about</a>
        <a href="/contact">Contact</a>
        <a href="/about/akn"> products</a>
      </div>
      <AppRouter />
    </div>
  );
};

export default App;
