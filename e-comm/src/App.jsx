import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="px-8">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
