import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { Layout } from "@/components/layouts";
import Users from "@/components/routes/users";
import Head from "next/head";

const UserPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="title" content="Users" />
        <meta name="description" content="Users page Description here" />
        <meta name="keywords" content="Users page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Users />
    </>
  );
};

export default UserPage;

UserPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
