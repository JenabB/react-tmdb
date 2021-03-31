import React, { useState, useEffect } from "react";
import TrendingWeekCard from "./TrendingWeekCard";

const TrendingWeek = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setTrending(data.results))
      .catch((err) => console.log(err));
  }, []);

  const top10 = [];

  for (var i = 0; i < 10; i++) {
    top10.push(trending[i]);
  }

  console.log(top10);

  return (
    <div>
      <div className="popular-container">
        <div className="weekly-header">
          <div>
            <h1 style={{ fontSize: "20px" }}>Popular</h1>
          </div>
          <div>
            <h2>See All</h2>
          </div>
        </div>
        <div className="weekly-container">
          {trending &&
            trending?.map((movie) => (
              <div key={movie.id}>
                <TrendingWeekCard movie={movie} trending={trending} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingWeek;
