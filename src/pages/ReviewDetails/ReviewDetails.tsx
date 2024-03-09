import { useLoaderData } from "react-router-dom";
import type { loaderData } from "./loader";

export default function ReviewDetails() {
  const { attributes: review } = useLoaderData() as loaderData;

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

        <small>console list</small>
        <p>{reviewBody}</p>
      </div>
    </div>
  );
}
