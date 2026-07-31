import { useForm } from "react-hook-form";

function ReviewForm({id, setUserReviews}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  function onSubmit(data) {
    const { reviewerName, rating } = data;
    const noSpaceRevName = reviewerName.split("").filter((char) => char !== " ").join("").toLowerCase();
    const ratingIntoNum = +rating;
    const reviewerEmail = `${noSpaceRevName}@x.dummyjson.com`;
    const date = new Date().toISOString();
    const updatedData = { ...data, reviewerEmail, date, rating: ratingIntoNum };
    
    if (!localStorage.getItem(`reviews-${id}`)) {
        localStorage.setItem(`reviews-${id}`, JSON.stringify([updatedData]))
        setUserReviews([updatedData]);
    } else {
        const currArr = JSON.parse(localStorage.getItem(`reviews-${id}`));
        const updatedArr = [updatedData, ...currArr];
        localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedArr));
        setUserReviews(updatedArr);
    }
    reset();
  }

  return (
    <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="review-form__top">
        <input
          className="review-form__name"
          type="text"
          placeholder="Reviewer name"
          {...register("reviewerName", {
            required: { value: true, message: "Nickname is required" },
            maxLength: { value: 30, message: "30 chars max" },
          })}
        />
        <select className="review-form__rating" {...register("rating")}>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <option key={index}>{index + 1}</option>
            ))}
        </select>
      </div>
      <span>{errors.reviewerName && errors.reviewerName.message}</span>
      <textarea
        className="review-form__comment"
        placeholder="Write your review"
        {...register("comment", {
          required: { value: true, message: "Comment is requied" },
          maxLength: { value: 300, message: "300 chars max" },
        })}
      ></textarea>
      <span>{errors.comment && errors.comment.message}</span>
      <button className="review-form__button" disabled={!isValid}>
        Submit review
      </button>
    </form>
  );
}

export default ReviewForm;
