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

  return (
    <div>
      <div className="trending-container" style={{ marginBottom: "70px" }}>
        <h1 style={{ fontSize: "20px" }}>Trending</h1>

        {trending &&
          trending?.map((movie) => (
            <div key={movie.id}>
              <TrendingDayCard movie={movie} trending={trending} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingDay;
