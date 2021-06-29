import React, { useState, useEffect } from 'react';

const Genre = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/genre/movie/list?api_key=bb3adbee117f90173796752289a7ae37&language=en-US`)
      .then((response) => response.json())
      .then((data) => setGenre(data.genres))
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
