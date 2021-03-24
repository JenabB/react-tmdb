import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

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
          <h4 className="release-date">{movie.release_date}</h4>
          <div className="rating">
            <h5>
              {movie.vote_average}/{movie.vote_count}
            </h5>
          </div>
        </div>

        <div className="result-controls">
          <button
            className="btn btn-secondary"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Watchlist
          </button>

          <button
            className="btn btn-primary"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Watched
          </button>
        </div>
      </div>
    </div>
  );
};
