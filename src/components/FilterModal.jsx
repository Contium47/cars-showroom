import { useState } from "react";

import calculatePrice from "../utils/money";

import "./FilterModal.css";

function FilterModal({isModalOpen, setIsModalOpen, vehicleList, setFilteredVehicles}) {
  const [filters, setFilters] = useState({brand: '', priceFrom: '', priceTo: ''});

  if (!isModalOpen) return null;

  const brands = [... new Set(vehicleList.map(vehicle => vehicle.brand))];
  
  function applyFilters(e) {
    e.preventDefault();

    let filtered = vehicleList;
    if (filters.brand) {
      filtered = filtered.filter(vehicle => filters.brand === vehicle.brand);
    }

    if (filters.priceFrom) {
      filtered = filtered.filter(vehicle => calculatePrice(vehicle.price, vehicle.discountPercentage) >= +filters.priceFrom);
    }

    if (filters.priceTo) {
      filtered = filtered.filter(vehicle => calculatePrice(vehicle.price, vehicle.discountPercentage) <= +filters.priceTo);
    }

    setFilteredVehicles(filtered);
    setIsModalOpen(false)
  }

  return (
    <div className="filter-modal">
      <div className="filter-modal__content">
        <header className="filter-modal__header">
          <h2>Filters</h2>
          <button className="filter-modal__close" onClick={() => setIsModalOpen(false)}>✕</button>
        </header>

        <div className="brand-filter">
          <button className={filters.brand === '' ? 'brand-filter__button--active' : 'brand-filter__button'} onClick={() => setFilters({...filters, brand: ''})}>Any</button>

          {brands.map((brand, index) => <button key={index} className={filters.brand === brand ? 'brand-filter__button--active' : 'brand-filter__button'} onClick={() => setFilters({...filters, brand})}>{brand}</button>)}
        </div>

        <form className="filter-modal__form" onSubmit={applyFilters}>
          <div className="filter-modal__group">
            <label htmlFor="priceFrom">Price from</label>
            <input
              id="priceFrom"
              type="number"
              placeholder="0"
              value={filters.priceFrom}
              onChange={e => setFilters({...filters, priceFrom: e.target.value})}
            />
          </div>

          <div className="filter-modal__group">
            <label htmlFor="priceTo">Price to</label>
            <input
              id="priceTo"
              type="number"
              placeholder="50000"
              value={filters.priceTo}
              onChange={e => setFilters({...filters, priceTo: e.target.value})}
            />
          </div>

          <div className="filter-modal__actions">
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterModal;