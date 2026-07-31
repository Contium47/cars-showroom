function VehicleDimensions({vehicleInfo}) {
    return (
        <div className="vehicle-page__dimensions">
          <div className="vehicle-page__dimension">
            <span className="vehicle-page__dimension-label">Width: </span>
            <span className="vehicle-page__dimension-value">
              {vehicleInfo.dimensions.width}
            </span>
          </div>

          <div className="vehicle-page__dimension">
            <span className="vehicle-page__dimension-label">Height: </span>
            <span className="vehicle-page__dimension-value">
              {vehicleInfo.dimensions.height}
            </span>
          </div>

          <div className="vehicle-page__dimension">
            <span className="vehicle-page__dimension-label">Depth: </span>
            <span className="vehicle-page__dimension-value">
              {vehicleInfo.dimensions.depth}
            </span>
          </div>
        </div>
    )
}

export default VehicleDimensions;