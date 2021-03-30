import React from "react";
import { Link } from "react-router-dom";

const TrendingDayCard = ({ trending, movie }) => {
  return (
    <Link to={`movie/${movie.id}`}>
      <div className="trending-card">
        <div className="position">
          <p>{trending.indexOf(movie) + 1}</p>
        </div>

        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            style={{ height: "150px" }}
          />
        </div>

        <div className="trending-info">
          <h1>{movie.title}</h1>
          <h2>{movie.release_date}</h2>
          <h3>popularity: {movie.popularity}</h3>
        </div>
      </div>
    </Link>
  );
};

export default TrendingDayCard;
