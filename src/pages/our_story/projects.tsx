import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import Projects from "@/components/routes/our_story/projects";
import Head from "next/head";

const ProjectPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="title" content="Projects" />
        <meta name="description" content="Projects page Description here" />
        <meta name="keywords" content="Projects page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </>
  );
};

export default ProjectPage;

ProjectPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
