import { useRouter } from "next/router";
import React from "react";

const UserReviews = () => {
  const { query, asPath } = useRouter();

  return (
    <div className="text-3xl font-bold">
      {query.user} - {query.reviews}
    </div>
  );
};

export default UserReviews;
