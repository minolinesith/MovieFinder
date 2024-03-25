import { useState, useEffect } from "react";
import "./App.css";

import searchImage from './assets/search.svg';
import MovieContainer from "./MovieContainer";

//5a0647b0


const apiUrl = 'http://www.omdbapi.com?apikey=5a0647b0';
function App() {

  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState([]);



  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);


  }


  useEffect(() => {
    searchMovies('Spiderman')


  }, [])


  return (<>

    <div className="app-search-container">
      <h1>Movie Finder</h1>

      <div className="search-container">
        <input className="search-bar" type="text" placeholder=" Enter movie title..." value={search} onChange={(e) => { setSearch(e.target.value) }} />
        <img className="search-icon" src={searchImage} alt="search" onClick={() => { searchMovies(search) }} />


      </div>

      {movies.length > 0 ? (
        <div className="container-movie">
          {movies.map((movie) => (
            <MovieContainer movie={movie} />
          ))}

        </div>

      ) :
        (<div className="empty">
          <h2>No movies found</h2>
        </div>)
      }


    </div>

  </>


  );
}

export default App
