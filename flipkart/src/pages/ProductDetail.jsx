import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  const fetchSingleProduct = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (res) {
        setProduct(res.data);
      }
    } catch (error) {
      console.log("error in spa", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return (
    <div>
      <h1>Product details</h1>
      <div className="flex flex-col gap-5">
        <img width={400} src={product.image} alt="" />
        <h1>{product.title}</h1>

        <h1>{product.description}</h1>
        <h1>{product.price}</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
