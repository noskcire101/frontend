import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import Testimonials from "@/components/routes/our_story/testimonials";

const TestimonialPage: NextPageWithLayout = () => {
  return <Testimonials />;
};

export default TestimonialPage;

TestimonialPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
