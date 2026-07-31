import { Link } from "react-router";

import calculatePrice from "../utils/money";

import './VehicleCard.css'

function VehicleCard({ vehicleInfo }) {
  return (
    <li className="vehicle-card">
      <Link to={`/vehicles/${vehicleInfo.id}`}>
      <div className="vehicle-card__image-wrapper">
        <img
          className="vehicle-card__image"
          src={vehicleInfo.thumbnail}
          alt=""
        />
        <span className="vehicle-card__discount">-{Math.round(vehicleInfo.discountPercentage)}%</span>
      </div>
        <div className="vehicle-card__content">
          <h3 className="vehicle-card__title">
            {vehicleInfo.brand} {vehicleInfo.title}
          </h3>
          <div className="vehicle-card__pricing">
            <p className="vehicle-card__old-price">${vehicleInfo.price}</p>
            <p className="vehicle-card__price">
                ${calculatePrice(vehicleInfo.price, vehicleInfo.discountPercentage)}
            </p>
          </div>
          <p
            className={`vehicle-card__rating ${vehicleInfo.rating >= 4.5 ? "rating-good" : vehicleInfo.rating >= 3.0 ? "rating-normal" : "rating-bad"}`}
          >
            {vehicleInfo.rating}
          </p>
          <p
            className={`vehicle-card__status ${vehicleInfo.availabilityStatus ? "status-in-stock" : "status-out-of-stock"}`}
          >
            {vehicleInfo.availabilityStatus}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default VehicleCard;
