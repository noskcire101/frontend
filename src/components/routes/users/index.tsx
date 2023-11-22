import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div className="text-3xl font-bold">
      <Link href={"/users/details/erickson-details"}>Erickson</Link>
      <br></br>
      <Link href={"/users/details/erickson-details/reviews/his-reviews"}>
        Erickson reviews
      </Link>
    </div>
  );
};

export default Users;
