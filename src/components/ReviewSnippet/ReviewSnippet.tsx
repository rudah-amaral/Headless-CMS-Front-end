import { Link } from "react-router-dom";
import type { ReviewData } from "../../pages/Homepage/loader";

interface ReviewSnippetProps {
  review: ReviewData;
}

export default function ReviewSnippet({ review }: ReviewSnippetProps) {
  const { attributes: reviewData } = review;
  let reviewSnippet = "";
  reviewData.body[0].children.every((child) => {
    if (child.type === "text") {
      reviewSnippet = child.text;
      return false;
    }
    return true;
  });

  return (
    <div className="review-card">
      <h2>{reviewData.title}</h2>
      <div className="rating">{reviewData.rating}</div>

      {reviewData.categories?.data.map((category) => (
        <small key={category.id}>{category.attributes.name}</small>
      ))}
      <p>{reviewSnippet.slice(0, 200)}...</p>

      <Link to={`/details/${review.id}`}>Read more</Link>
    </div>
  );
}
