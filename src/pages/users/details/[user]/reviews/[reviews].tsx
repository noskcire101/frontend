import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layouts";
import UserReviews from "@/components/routes/users/details/reviews";

const UserReviewsPage: NextPageWithLayout = () => {
  return <UserReviews />;
};

export default UserReviewsPage;

UserReviewsPage.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
