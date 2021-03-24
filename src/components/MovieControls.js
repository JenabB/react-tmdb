import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            onClick={() => addMovieToWatched(movie)}
            className="btn watchlist"
          >
            eye
          </button>
          <button
            onClick={() => removeMovieFromWatchlist(movie.id)}
            className="btn watched"
          >
            times
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            onClick={() => moveToWatchlist(movie)}
            className="btn watchlist"
          >
            eye
          </button>
          <button
            onClick={() => removeMovieFromWatched(movie.id)}
            className="btn watched"
          >
            times
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
