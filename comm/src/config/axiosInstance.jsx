import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    toast.success("fetched..");
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      toast.error("Request not found");
    } else {
      toast.error("kuch to hai..");
    }
  }
);
