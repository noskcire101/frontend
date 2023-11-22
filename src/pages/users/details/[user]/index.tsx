import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import UserDetails from "@/components/routes/users/details";

const UserDetailsPage: NextPageWithLayout = () => {
  return <UserDetails />;
};

export default UserDetailsPage;

UserDetailsPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
