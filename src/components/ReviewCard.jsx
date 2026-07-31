import starFilled from "../imgs/star-filled.svg";
import starEmpty from "../imgs/star-empty.svg";

function ReviewCard({review, arr, year, month, day}) {
  return (
    <article>
      <h3>{review.reviewerName}</h3>
      <span className="review-rating">
        {arr.map((item, index) =>
          index < review.rating ? (
            <img key={index} src={starFilled} />
          ) : (
            <img key={index} src={starEmpty} />
          ),
        )}
      </span>
      <p>{review.comment}</p>
      <p>
        {year}-{month}-{day}
      </p>
    </article>
  );
}

export default ReviewCard;