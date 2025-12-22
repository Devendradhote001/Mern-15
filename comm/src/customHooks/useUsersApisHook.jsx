import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../apis/usersApis";

export const getUsersApisHook = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
