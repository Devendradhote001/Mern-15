import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const fetchUsers = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        setProducts(res.data);
      }
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className=" h-screen p-4 flex gap-5 flex-wrap">
      {products.map((elem) => {
        return <ProductCard key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

export default HomePage;
