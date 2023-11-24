import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import ContactUs from "@/components/routes/lets_connect/contactUs";
import Head from "next/head";

const ContactUsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="title" content="Contact Us" />
        <meta name="description" content="Contact Us page Description here" />
        <meta name="keywords" content="Contact Us page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactUs />
    </>
  );
  return <ContactUs />;
};

export default ContactUsPage;

ContactUsPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
