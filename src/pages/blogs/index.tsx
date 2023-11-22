import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import Blogs from "@/components/routes/blogs";

const BlogPage: NextPageWithLayout = () => {
  return <Blogs />;
};

export default BlogPage;

BlogPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
