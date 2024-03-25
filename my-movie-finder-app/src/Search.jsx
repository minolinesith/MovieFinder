import searchImage from './assets/search.svg';
import { useState } from 'react';

function Search() {

    const [search, setSearch] = useState("");

    function handleSearchChange(e) {
        setSearch(e.target.value);

    }

    function handleOnClick() {
        searchMovies(search);
    }

    return (<div className="search-container">
        <input className="search-bar" type="text" placeholder=" Enter movie title..." value={search} onChange={() => { handleSearchChange }} />
        <img className="search-icon" src={searchImage} alt="search" onClick={() => { handleOnClick }} />


    </div>);
}

export default Search