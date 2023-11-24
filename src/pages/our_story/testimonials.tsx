import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import Testimonials from "@/components/routes/our_story/testimonials";
import Head from "next/head";

const TestimonialPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Testimonials</title>
        <meta name="title" content="Testimonials" />
        <meta name="description" content="Testimonials page Description here" />
        <meta name="keywords" content="Testimonials page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Testimonials />
    </>
  );
};

export default TestimonialPage;

TestimonialPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
