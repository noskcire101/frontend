import { useRouter } from "next/router";
import React from "react";

const UserDetails = () => {
  const { query } = useRouter();

  return <div className="text-3xl font-bold">{query.user}</div>;
};

export default UserDetails;
