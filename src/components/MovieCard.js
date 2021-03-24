import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="movie-title">{movie.title}</h3>
          <h4 className="release-date">
            <h5>{movie.release_date.substring(0, 4)}</h5>
          </h4>
        </div>
      </div>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
