import { useLoaderData } from "react-router-dom";
import type { loaderData } from "./loader";
import { useReadQuery } from "@apollo/client";
import ReviewSnippet from "../../components/ReviewSnippet/ReviewSnippet";

export default function Homepage() {
  const queryRef = useLoaderData() as loaderData;
  const response = useReadQuery(queryRef);

  if (response.error) throw response.error;
  const { data: reviews } = response.data.reviews;

  return (
    <div>
      {reviews.map((review) => (
        <ReviewSnippet key={review.id} review={review} />
      ))}
    </div>
  );
}
