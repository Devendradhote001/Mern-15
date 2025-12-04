import React, { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router";

const Users = () => {
  console.log("rendering... users...");
  let useraData = useLoaderData();
  console.log("data of users->", useraData);

  return (
    <div>
      <h1>USers</h1>
    </div>
  );
};

export default Users;
