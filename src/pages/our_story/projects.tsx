import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import Projects from "@/components/routes/our_story/projects";

const ProjectPage: NextPageWithLayout = () => {
  return <Projects />;
};

export default ProjectPage;

ProjectPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
