import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import NewsLetter from "@/components/routes/lets_connect/newsletter";
import Head from "next/head";

const NewsLetterPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Newsletter</title>
        <meta name="title" content="Newsletter" />
        <meta name="description" content="Newsletter page Description here" />
        <meta name="keywords" content="Newsletter page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsLetter />
    </>
  );
};

export default NewsLetterPage;

NewsLetterPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
