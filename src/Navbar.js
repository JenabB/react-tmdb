import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";

const Navbar = () => {
  return (
    <Router>
      <nav className="navigation-bar">
        <a className="navbar-brand" href="/">
          Navbar
        </a>

        <div className="navbar-side">
          <div>
            <Link to="/watchlist">Watchlist</Link>
          </div>
          <div>
            <Link to="/watched">Watched</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/watchlist">
          <Watchlist />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
