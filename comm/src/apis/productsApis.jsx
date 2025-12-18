import { axiosInstance } from "../config/axiosInstance";

export const fetchProducts = async () => {
  console.log("rendering for products..");
  try {
    let res = await axiosInstance.get("/products");
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("error in pro apis", error);
  }
};
