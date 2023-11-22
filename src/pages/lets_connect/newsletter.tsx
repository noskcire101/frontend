import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import NewsLetter from "@/components/routes/lets_connect/newsletter";

const NewsLetterPage: NextPageWithLayout = () => {
  return <NewsLetter />;
};

export default NewsLetterPage;

NewsLetterPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
