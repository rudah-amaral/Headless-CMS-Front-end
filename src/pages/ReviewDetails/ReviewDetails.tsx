import { useLoaderData } from "react-router-dom";
import { useReadQuery } from "@apollo/client";
import type { loaderData } from "./loader";

export default function ReviewDetails() {
  const queryRef = useLoaderData() as loaderData;
  const response = useReadQuery(queryRef);

  if (response.error) throw response.error;
  const { attributes: review } = response.data.review.data;

  const reviewBody = review.body.map((rootNode) => {
    return rootNode.children.map((childNode, childIndex) => {
      if (childNode.type === "text")
        return <p key={childIndex}>{childNode.text}</p>;
    });
  });

  return (
    <div>
      <div className="review-card">
        <h2>{review.title}</h2>
        <div className="rating">{review.rating}</div>

        {review.categories?.data.map((category) => (
          <small key={category.id}>{category.attributes.name}</small>
        ))}
        <p>{reviewBody}</p>
      </div>
    </div>
  );
}
