import React from "react";
import Genre from "../components/discover/Genre";
import ResultMovie from "../components/discover/ResultMovie";

import "../components/discover/Discover.css";

const Discover = () => {
  return (
    <div>
      <Genre />
      <ResultMovie />
    </div>
  );
};

export default Discover;
