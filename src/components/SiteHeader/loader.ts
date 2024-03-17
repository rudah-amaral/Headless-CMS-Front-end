import { gql } from "@apollo/client";
import { queryPreloader } from "../../apolloLogic";
import { APIResponseCollection } from "../../types/types";
export type loaderData = Awaited<ReturnType<typeof loader>>;

interface AllReviewsQuery {
  categories: APIResponseCollection<"api::category.category">;
}

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default function loader() {
  return queryPreloader<AllReviewsQuery>(GET_CATEGORIES);
}
