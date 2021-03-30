import React, { useEffect, useState } from "react";

const ByGenre = (movie) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=bb3adbee117f90173796752289a7ae37&with_genres=${movie.id}`
    )
      .then((response) => response.json())
      .then((data) => (setMovies(data.results), console.log(data.results)))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      {movies &&
        movies?.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default ByGenre;
