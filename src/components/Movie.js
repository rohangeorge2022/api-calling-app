import React, { useState } from "react";

const Movie = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="movie">
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
        alt={movie.title}
      />
      <div className="movie-info">
        <div className="rating">Rating</div>
        <div className="title">
          <h3>{movie.title}</h3>
        </div>
        <div className="movie-footer">
          <a href="javascript:void(0);" className="trailer-btn">
            Trailer
          </a>
          <button type="button" onClick={handleShow} className="movie-modal">Info</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
