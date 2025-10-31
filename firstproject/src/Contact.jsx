import React, { useState } from "react";
import App from "./App";

const Contact = ({ greet, getDataFromChild }) => {
  const [data, setData] = useState("pop");
  getDataFromChild(data);
  return (
    <div>
      <h1>Contact</h1>
      <h1>Hello, {greet}</h1>
    </div>
  );
};

export default Contact;
