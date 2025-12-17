import React from "react";
import AppRouter from "./router/AppRouter";
import { useLocation } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  let { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" ? null : <Navbar />}

      <AppRouter />
    </div>
  );
};

export default App;
