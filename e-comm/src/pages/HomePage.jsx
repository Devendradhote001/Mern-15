import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        console.log(res);
        setProducts(res.data);
      }
    } catch (error) {
      console.log("error in api call", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((elem) => {
        return <h1 key={elem.id}>{elem.title}</h1>;
      })}
    </div>
  );
};

export default HomePage;
