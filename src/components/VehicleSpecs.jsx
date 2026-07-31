function VehicleSpecs({vehicleInfo}) {
  return (
    <ul className="vehicle-page__specs">
      <li className="vehicle-page__spec">
        <span className="vehicle-page__spec-label">Weight: </span>
        <span className="vehicle-page__spec-value">
          {vehicleInfo.weight} tons
        </span>
      </li>

      <li className="vehicle-page__spec">
        <span className="vehicle-page__spec-label">Warranty: </span>
        <span className="vehicle-page__spec-value">
          {vehicleInfo.warrantyInformation}
        </span>
      </li>

      <li className="vehicle-page__spec">
        <span className="vehicle-page__spec-label">Shipping: </span>
        <span className="vehicle-page__spec-value">
          {vehicleInfo.shippingInformation}
        </span>
      </li>

      <li className="vehicle-page__spec">
        <span className="vehicle-page__spec-label">Return Policy: </span>
        <span className="vehicle-page__spec-value">
          {vehicleInfo.returnPolicy}
        </span>
      </li>
    </ul>
  );
}

export default VehicleSpecs;