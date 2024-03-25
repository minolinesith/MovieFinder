function MovieContainer({ movie }) {



    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'NA' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span className="">{movie.Type}</span><br></br>
                <span>{movie.Title}</span>
            </div>


        </div>


    );
}

export default MovieContainer