import React, { useState } from "react";
import { ResultCard } from "../ResultCard";
import Trending from "./Trending";

const Add = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-page">
      <div className="add-content">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={handleChange}
          />
        </div>
        {query.length > 0 ? (
          <div className="row search-container">
            {movies &&
              movies.map((movie) => (
                <div key={movie.id} className="col">
                  <ResultCard movie={movie} />
                </div>
              ))}
          </div>
        ) : (
          <Trending />
        )}
      </div>
    </div>
  );
};

export default Add;
