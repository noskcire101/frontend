import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { Layout } from "@/components/layouts";
import Users from "@/components/routes/users";

const UserPage: NextPageWithLayout = () => {
  return <Users />;
};

export default UserPage;

UserPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
