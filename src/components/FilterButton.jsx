import filterIcon from '../imgs/filters-icon.svg'

import './FilterButton.css';

function FilterButton({setIsModalOpen}) {
    return (
        <button className="filter-btn" onClick={() => setIsModalOpen(true)}>
            <img className="filter-btn__icon" src={filterIcon}/>
            <span>Filters</span>
        </button>
    )
}

export default FilterButton;