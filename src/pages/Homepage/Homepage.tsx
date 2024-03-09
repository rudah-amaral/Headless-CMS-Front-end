import { Link, useLoaderData } from "react-router-dom";
import type { loaderData } from "./loader";

export default function Homepage() {
  const data = useLoaderData() as loaderData;

  return (
    <div>
      {data.map(({ id, attributes: review }) => {
        let reviewSnippet = "";
        const firstRootNode = review.body[0];
        firstRootNode.children.every((child) => {
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
