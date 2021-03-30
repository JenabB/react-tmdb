import React, { useState, useEffect } from "react";

const Genre = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => (setGenre(data.genres), console.log("genre", data)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="genre-list">
      {genre &&
        genre?.map((g) => (
          <div key={g.id}>
            <h1>{g.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default Genre;
