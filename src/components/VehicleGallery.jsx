function VehicleGallery({vehicleInfo, updatedImgs}) {
  return (
    <div className="vehicle-page__gallery">
      <img src={vehicleInfo.images[0]} alt="" />
      <div>
        {updatedImgs.map((src, index) => (
          <img key={index} src={src} />
        ))}
      </div>
    </div>
  );
}

export default VehicleGallery;
