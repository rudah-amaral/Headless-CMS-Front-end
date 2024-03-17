import { useLoaderData } from "react-router-dom";
import { useReadQuery } from "@apollo/client";
import type { loaderData } from "./loader";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function ReviewDetails() {
  const queryRef = useLoaderData() as loaderData;
  const response = useReadQuery(queryRef);

  if (response.error) throw response.error;
  const { attributes: review } = response.data.review.data;

  return (
    <div>
      <div className="review-card">
        <h2>{review.title}</h2>
        <div className="rating">{review.rating}</div>

        {review.categories?.data.map((category) => (
          <small key={category.id}>{category.attributes.name}</small>
        ))}
        <BlocksRenderer content={review.body} />
      </div>
    </div>
  );
}
