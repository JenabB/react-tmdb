import React, { useState, useEffect } from "react";
import TrendingDayCard from "./TrendingDayCard";

const TrendingDay = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
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
      <div className="trending-container">
        <h1>Trending</h1>
        {trending &&
          trending?.map((movie) => (
            <TrendingDayCard movie={movie} trending={trending} />
          ))}
      </div>
    </div>
  );
};

export default TrendingDay;
