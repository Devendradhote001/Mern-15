import axios from "axios";

export const fetchUsers = async () => {
  try {
    let res = await axios.get("https://fakestoreapi.com/users");
    if (res) {
      console.log(res);
      return res.data;
      
    }
  } catch (error) {
    console.log("error bta de", error);
  }
};


