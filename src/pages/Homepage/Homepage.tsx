import { Link, useLoaderData } from "react-router-dom";
import type { loaderData } from "./loader";
import { useReadQuery } from "@apollo/client";

export default function Homepage() {
  const queryRef = useLoaderData() as loaderData;
  const response = useReadQuery(queryRef);

  if (response.error) throw response.error;
  const { data } = response.data.reviews;

  return (
    <div>
      {data.map(({ id, attributes: review }) => {
        let reviewSnippet = "";
        review.body[0].children.every((child) => {
          if (child.type === "text") {
            reviewSnippet = child.text;
            return false;
          }
          return true;
        });

        return (
          <div key={id} className="review-card">
            <h2>{review.title}</h2>
            <div className="rating">{review.rating}</div>

            <small>console list</small>
            <p>{reviewSnippet.slice(0, 200)}...</p>

            <Link to={`/details/${id}`}>Read more</Link>
          </div>
        );
      })}
    </div>
  );
}
