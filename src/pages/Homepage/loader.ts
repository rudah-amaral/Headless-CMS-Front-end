import { gql } from "@apollo/client";
import { queryPreloader } from "../../apolloLogic";
import type { APIResponseCollection } from "../../types/types";
export type loaderData = Awaited<ReturnType<typeof loader>>;

interface AllReviewsQuery {
  reviews: APIResponseCollection<"api::review.review">;
}

export type ReviewData = AllReviewsQuery["reviews"]["data"][number];

const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default async function loader() {
  return queryPreloader<AllReviewsQuery>(GET_REVIEWS);
}
