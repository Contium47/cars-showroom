import ReviewCard from "./ReviewCard";

function ReviewList({apiReviews, userReviews}) {
    const allReviews = [...userReviews, ...apiReviews]

    return (
        <div className="review-list">
        {allReviews.map((review, index) => {
          const date = new Date(review.date);
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, "0");
          const day = date.getDate();

          const arr = Array(5).fill(0);

          return <ReviewCard key={index} review={review} arr={arr} year={year} month={month} day={day} />
        })}
      </div>
    )
}

export default ReviewList;