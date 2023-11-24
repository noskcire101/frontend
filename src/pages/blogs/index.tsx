import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import Blogs from "@/components/routes/blogs";
import Head from "next/head";

const BlogPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="title" content="Blogs" />
        <meta name="description" content="Blogs page Description here" />
        <meta name="keywords" content="Blogs page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blogs />
    </>
  );
};

export default BlogPage;

BlogPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
