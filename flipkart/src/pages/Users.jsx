import React, { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router";

const Users = () => {
  console.log("rendering... users...");

  let fetchUsers = useLoaderData();

  console.log("users data->", fetchUsers);

  return (
    <div>
      <h1>USers</h1>
    </div>
  );
};

export default Users;
