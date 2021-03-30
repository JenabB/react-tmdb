import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ResultMovie = (movie) => {
  const [genre] = useState("28");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=bb3adbee117f90173796752289a7ae37&with_genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [genre, movies]);

  return (
    <div className="discovery-result">
      {movies &&
        movies?.map((movie) => (
          <div key={movie.id}>
            <Link to={`movie/${movie.id}`}>
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
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ResultMovie;
