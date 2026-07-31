import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function VehicleReviews({ apiReviews, id, userReviews, setUserReviews }) {
  return (
    <section className="vehicle-page__reviews">
      <h2>Reviews</h2>

      <ReviewForm id={id} setUserReviews={setUserReviews} />
      <ReviewList apiReviews={apiReviews} userReviews={userReviews} />
    </section>
  );
}

export default VehicleReviews;