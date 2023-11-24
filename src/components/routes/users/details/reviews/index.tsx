import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const UserReviews = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Users Review</title>
        <meta name="title" content="Users Review" />
        <meta name="description" content="Users Review page Description here" />
        <meta name="keywords" content="Users Review page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-3xl font-bold">
        {query.user} - {query.reviews}
      </main>
    </>
  );
};

export default UserReviews;
