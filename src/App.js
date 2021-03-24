import React from "react";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import Navbar from "./Navbar";

const App = () => {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Navbar />
      </div>
    </GlobalProvider>
  );
};

export default App;
