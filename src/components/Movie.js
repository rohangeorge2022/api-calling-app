import React from "react";

const Movie = ({movie}) => (
  <div className="movie">
    <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt={movie.title} />
    <div className="movie-info">
      <h3>{movie.title}</h3>
    </div>
    {/* <div className="overview">
      <h3>Overview:</h3>
      <p>{movie.overview}</p>
    </div> */}
  </div>
);

export default Movie;