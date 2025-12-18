import React from "react";
import { getProductApiHook } from "../customHooks/useProductApisHook";

const Home = () => {
  let { data, isPending } = getProductApiHook();
  if (isPending) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Home</h1>
      {data?.map((elem) => {
        return <h1 key={elem.id}>{elem.title}</h1>;
      })}
    </div>
  );
};

export default Home;
