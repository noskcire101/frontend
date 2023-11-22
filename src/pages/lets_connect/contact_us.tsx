import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import ContactUs from "@/components/routes/lets_connect/contactUs";

const ContactUsPage: NextPageWithLayout = () => {
  return <ContactUs />;
};

export default ContactUsPage;

ContactUsPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
