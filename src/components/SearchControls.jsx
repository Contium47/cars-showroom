import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";

import './SearchControls.css'

function SearchControls({isModalOpen, setIsModalOpen}) {
    return (
        <header className="header">
            <SearchInput />
            <FilterButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </header>
    )
}

export default SearchControls;