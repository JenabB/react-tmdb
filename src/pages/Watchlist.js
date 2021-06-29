import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-container">
      <div className="row">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div key={movie.id} className="col">
              <MovieCard movie={movie} type="watchlist" />
            </div>
          ))
        ) : (
          <div>
            <h1>No movie yet</h1>
            <Link to="/">Add</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
