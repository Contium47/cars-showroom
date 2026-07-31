import VehicleDimensions from "./VehicleDimensions";
import VehicleSpecs from "./VehicleSpecs";

function VehicleSpecifications({vehicleInfo}) {
    return (
        <section className="vehicle-page__specifications">
        <h2>Specifications</h2>

        <VehicleDimensions vehicleInfo={vehicleInfo} />

        <VehicleSpecs vehicleInfo={vehicleInfo} />
      </section>
    )
}

export default VehicleSpecifications;