import React from "react";
import AppRouter from "./router/AppRouter";
import { useLocation } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  let { pathname } = useLocation();

  return (
    <div className="h-screen">
      {pathname === "/" ? null : <Navbar />}

      <div className="p-4">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
