import { gql } from "@apollo/client";
import { queryPreloader } from "../../apolloLogic";
import type { LoaderFunctionArgs } from "react-router-dom";
import type { APIResponse } from "../../types/types";
export type loaderData = Awaited<ReturnType<typeof loader>>;

interface SingleReviewQuery {
  review: APIResponse<"api::review.review">;
}

const GET_REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

export default function loader({ params }: LoaderFunctionArgs) {
  return queryPreloader<SingleReviewQuery>(GET_REVIEW, {
    variables: { id: params.id },
  });
}
