import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { Layout } from "@/components/layouts";
import About from "@/components/routes/our_story/about";
import Head from "next/head";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="title" content="About" />
        <meta name="description" content="About page Description here" />
        <meta name="keywords" content="About page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;

AboutPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
