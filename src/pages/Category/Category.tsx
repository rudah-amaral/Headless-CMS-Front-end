import { useReadQuery } from "@apollo/client";
import { Link, useLoaderData } from "react-router-dom";
import { loaderData } from "./loader";

export default function Category() {
  const queryRef = useLoaderData() as loaderData;
  const response = useReadQuery(queryRef);

  if (response.error) throw response.error;

  const { attributes: category } = response.data.category.data;
  const reviews = category.reviews ? category.reviews.data : [];

  return (
    <div>
      <h2>{category.name}</h2>
      {reviews.map(({ id, attributes: review }) => {
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

            {review.categories?.data.map((category) => (
              <small key={category.id}>{category.attributes.name}</small>
            ))}
            <p>{reviewSnippet.slice(0, 200)}...</p>

            <Link to={`/details/${id}`}>Read more</Link>
          </div>
        );
      })}
    </div>
  );
}
