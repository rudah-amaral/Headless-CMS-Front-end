import { gql } from "@apollo/client";
import { queryPreloader } from "../../apolloLogic";
import type { APIResponseCollection } from "../../types/types";
export type loaderData = Awaited<ReturnType<typeof loader>>;

interface AllReviewsQuery {
  reviews: APIResponseCollection<"api::review.review">;
}

const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        attributes {
          title
          rating
          body
        }
        id
      }
    }
  }
`;

export default async function loader() {
  return queryPreloader<AllReviewsQuery>(GET_REVIEWS);
}
