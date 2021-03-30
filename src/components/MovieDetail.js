import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Detail.css";
const MovieDetail = ({ match }) => {
  const [detail, setDetail] = useState([]);
  const [credit, setCredit] = useState([]);

  let movie_id = match.params.id;
  let history = useHistory();

  function goBack() {
    history.goBack();
  }

  console.log("detail", detail);
  console.log("credit", credit);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setDetail(data))
      .catch((error) => console.log(error));

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setCredit(data))
      .catch((error) => console.log(error));
  }, [movie_id]);

  return (
    <div>
      <button className="back-button" onClick={goBack}>
        Back
      </button>
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
        <h2>{detail.release_date}</h2>
        <h2>{detail.overview}</h2>
      </div>

      <div className="cast">
        <h1 style={{ margin: "10px " }}>Cast</h1>
        <div className="cast-container">
          {credit.cast?.map((cast) => (
            <div key={cast.id} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                alt={`${cast.name} Poster`}
              />
              <h1>{cast.name}</h1>
              <h2>{cast.character}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
