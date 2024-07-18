import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();

  // console.log(user.email);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/users/admin/${user.email}`);
      console.log(res.data);
      // console.log(res);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
