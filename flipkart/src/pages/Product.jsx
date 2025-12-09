import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        setProducts(res.data);
      }
    } catch (error) {
      console.log("error in product api", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="h-screen flex flex-wrap gap-4 justify-center">
      {products.map((val) => {
        return <ProductCard key={val.id} val={val} />;
      })}
    </div>
  );
};

export default Product;
