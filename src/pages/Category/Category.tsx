import { useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import { loaderData } from "./loader";
import ReviewSnippet from "../../components/ReviewSnippet/ReviewSnippet";

export default function Category() {
  const queryRef = useLoaderData() as loaderData;
  const response = useReadQuery(queryRef);

  if (response.error) throw response.error;

  const { attributes: category } = response.data.category.data;
  const reviews = category.reviews ? category.reviews.data : [];

  return (
    <div>
      <h2>{category.name}</h2>
      {reviews.map((review) => (
        <ReviewSnippet key={review.id} review={review} />
      ))}
    </div>
  );
}
