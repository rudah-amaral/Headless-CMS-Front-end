import { Link } from "react-router-dom";
import type { ReviewData } from "../../pages/Homepage/loader";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

interface ReviewSnippetProps {
  review: ReviewData;
}

export default function ReviewSnippet({ review }: ReviewSnippetProps) {
  const { attributes: reviewData } = review;
  const reviewSnippet = getReviewSnippet(reviewData.body);

  return (
    <div className="review-card">
      <h2>{reviewData.title}</h2>
      <div className="rating">{reviewData.rating}</div>

      {reviewData.categories?.data.map((category) => (
        <small key={category.id}>{category.attributes.name}</small>
      ))}
      <BlocksRenderer content={reviewSnippet} />

      <Link to={`/details/${review.id}`}>Read more</Link>
    </div>
  );
}

function getReviewSnippet(reviewContent: BlocksContent): BlocksContent {
  const firstText = getReviewsFirstText(reviewContent);
  const textSnippet =
    firstText.length > 197
      ? firstText.substring(0, 197).trimEnd().concat("...")
      : firstText;

  return [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: textSnippet,
        },
      ],
    },
  ];
}

function getReviewsFirstText(reviewContent: BlocksContent) {
  const firstBlock = reviewContent[0];
  if (firstBlock.type !== "paragraph")
    throw new Error("Review's first block isn't a paragraph");

  const firstInlineNode = firstBlock.children[0];
  if (firstInlineNode.type !== "text")
    throw new Error("Paragraph's first node isn't text");

  return firstInlineNode.text;
}
