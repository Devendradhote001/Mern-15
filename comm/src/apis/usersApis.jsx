import { axiosInstance } from "../config/axiosInstance";

export const fetchUsers = async () => {
  console.log("rendering.. for users...");
  try {
    let res = await axiosInstance.get("/users");
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("error in pro apis", error);
  }
};
