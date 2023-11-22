import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { Layout } from "@/components/layouts";
import About from "@/components/routes/our_story/about";

const AboutPage: NextPageWithLayout = () => {
  return <About />;
};

export default AboutPage;

AboutPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
