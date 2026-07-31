import calculatePrice from "../utils/money";

function VehicleInfo({ vehicleInfo, apiReviews, userReviews }) {
  return (
    <div className="vehicle-page__info">
      <h1>
        {vehicleInfo.brand} {vehicleInfo.title}
      </h1>

      <div className="vehicle-page__rating">
        <span>{vehicleInfo.rating}</span>
        <span> • </span>
        <span>{apiReviews.length + userReviews.length} reviews</span>
      </div>

      <div className="vehicle-page__pricing">
        <p>${vehicleInfo.price}</p>

        <p>-{Math.round(vehicleInfo.discountPercentage)}%</p>

        <p>
          ${calculatePrice(vehicleInfo.price, vehicleInfo.discountPercentage)}
        </p>
      </div>

      <div className="vehicle-page__availability">
        <p>{vehicleInfo.availabilityStatus}</p>
        <p>Quantity: {vehicleInfo.stock}</p>
      </div>

      <div className="vehicle-page__actions">
        <button>Buy / Book</button>
      </div>
    </div>
  );
}

export default VehicleInfo;
