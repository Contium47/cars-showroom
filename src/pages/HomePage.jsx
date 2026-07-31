import SearchControls from "../components/SearchControls";
import VehicleList from "../components/VehicleList";
import FilterModal from "../components/FilterModal";
import { useState } from "react";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleList, setVehicleList] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([])

  return (
    <main>
      <SearchControls isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <VehicleList vehicleList={vehicleList} setVehicleList={setVehicleList} filteredVehicles={filteredVehicles} setFilteredVehicles={setFilteredVehicles} />
      <FilterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} vehicleList={vehicleList} setFilteredVehicles={setFilteredVehicles} />
    </main>
  );
}

export default HomePage;
