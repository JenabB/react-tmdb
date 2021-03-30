import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../components/MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-container">
      <div className="row">
        {watched.length > 0 ? (
          watched.map((movie) => (
            <div key={movie.id} className="col">
              <MovieCard movie={movie} type="watched" />
            </div>
          ))
        ) : (
          <h1>No Watched</h1>
        )}
      </div>
    </div>
  );
};

export default Watched;
