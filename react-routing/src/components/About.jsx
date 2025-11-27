import React from "react";
import { Outlet } from "react-router";

const About = () => {
  return (
    <div>
      <h1>I m about</h1>
      <a href="/about/akn">product list</a>
      <Outlet />
    </div>
  );
};

export default About;
