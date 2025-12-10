import React from "react";

const About = ({ greet }) => {
  console.log("about rendering....");

  return (
    <div>
      <h1>About hu me </h1>
      <button onClick={() => greet()}>Greet</button>
    </div>
  );
};

export default React.memo(About);
