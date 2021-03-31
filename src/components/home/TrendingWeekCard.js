import React from "react";
import { Link } from "react-router-dom";
const TrendingWeekCard = ({ movie }) => {
  return (
    <div className="weekly-card">
      <Link to={`movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          style={{ height: "200px" }}
        />
        <div className="weekly-info">
          <h1>{movie.title}</h1>
        </div>
      </Link>
    </div>
  );
};
export default TrendingWeekCard;
