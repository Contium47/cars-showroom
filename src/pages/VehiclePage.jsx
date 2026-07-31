import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import VehicleSpecifications from "../components/VehicleSpecifications";
import VehicleReviews from "../components/VehicleReviews";

import VehicleGallery from "../components/VehicleGallery";
import VehicleInfo from "../components/VehicleInfo";

import "./VehiclePage.css";

function VehiclePage() {
  const { id } = useParams();
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [apiReviews, setApiReviews] = useState([])
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    async function fetchVehicle() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(response.data);
      setVehicleInfo(response.data);
    }

    fetchVehicle();
  }, [id]);

  useEffect(() => {
    if (!vehicleInfo) return;

    setApiReviews(vehicleInfo.reviews);
    
    localStorage.getItem(`reviews-${id}`) ? setUserReviews(JSON.parse(localStorage.getItem(`reviews-${id}`))) : setUserReviews([])

  }, [vehicleInfo]);

  if (!vehicleInfo) {
    return <p>Loading...</p>;
  }

  const updatedImgs = vehicleInfo.images.slice(1, vehicleInfo.images.length);

  return (
    <main className="vehicle-page">
      <section className="vehicle-page__main">
        <VehicleGallery vehicleInfo={vehicleInfo} updatedImgs={updatedImgs} />

        <VehicleInfo vehicleInfo={vehicleInfo} apiReviews={apiReviews} userReviews={userReviews} setUserReviews={setUserReviews} />
      </section>

      <VehicleSpecifications vehicleInfo={vehicleInfo} />

      <section className="vehicle-page__description">
        <h2>Description</h2>

        <p>{vehicleInfo.description}</p>
      </section>

      <VehicleReviews id={id} apiReviews={apiReviews} setApiReviews={setApiReviews} userReviews={userReviews} setUserReviews={setUserReviews} />
    </main>
  );
}

export default VehiclePage; 