import React, { useEffect, useState } from "react";

const MovieDetail = ({ match }) => {
  const [detail, setDetail] = useState([]);
  let params = match.params.id;
  console.log(params);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setDetail(data))
      .catch((error) => console.log(error));
  }, [params]);

  return (
    <div>
      <div className="poster-detail">
        {detail.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt={`${detail.title} Poster`}
            style={{ width: "100%" }}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="movie-meta">
        <h1>{detail.title}</h1>
        <h2>{detail.overview}</h2>
        <h2>{detail.release_date}</h2>
      </div>
    </div>
  );
};

export default MovieDetail;
