import { useEffect } from "react";
import axios from "axios";

import VehicleCard from "./VehicleCard";

import './VehicleList.css'

function VehicleList({setVehicleList, filteredVehicles, setFilteredVehicles}) {

  useEffect(() => {
    async function fetchVehicles() {
      const response = await axios.get(
        "https://dummyjson.com/products/category/vehicle",
      );
      console.log(response.data.products);
      setVehicleList(response.data.products);
      setFilteredVehicles(response.data.products);
    }

    fetchVehicles();
  }, []);

  return (
        <section className="vehicle-section">
            <ul className="vehicle-list">
                {filteredVehicles.map(vehicleInfo => {
                    return (<VehicleCard key={vehicleInfo.id} vehicleInfo={vehicleInfo} />)
                })}
            </ul>
        </section>   
    );
}

export default VehicleList;
