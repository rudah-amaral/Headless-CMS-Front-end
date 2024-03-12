import { gql } from "@apollo/client";
import { queryPreloader } from "../../apolloLogic";
import { APIResponse } from "../../types/types";
import { LoaderFunctionArgs } from "react-router-dom";
export type loaderData = Awaited<ReturnType<typeof loader>>;

interface CategoryReviews {
  category: APIResponse<"api::category.category">;
}

const GET_CATEGORY_REVIEWS = gql`
  query GetCategoryReviews($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
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
      }
    }
  }
`;

export default async function loader({ params }: LoaderFunctionArgs) {
  return queryPreloader<CategoryReviews>(GET_CATEGORY_REVIEWS, {
    variables: { id: params.id },
  });
}
