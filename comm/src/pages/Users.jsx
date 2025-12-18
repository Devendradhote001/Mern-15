import React from "react";

import { getUsersApisHook } from "../customHooks/useUsersApisHook";

const Users = () => {
  let { data, isPending } = getUsersApisHook();

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>users</h1>
      {data?.map((elem) => {
        return <h1 key={elem.id}>{elem.name.firstname}</h1>;
      })}
    </div>
  );
};

export default Users;
