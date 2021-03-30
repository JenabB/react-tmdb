import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Watchlist from "./pages/Watchlist";
import Watched from "./pages/Watched";
import Account from "./pages/Account";
import MovieDetail from "./components/MovieDetail";

const Navbar = () => {
  return (
    <Router>
      <nav className="navigation-bar">
        <div className="navbar-side">
          <div style={{ marginLeft: 0 }}>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/discover">Discover</Link>
          </div>
          <div>
            <Link to="/watchlist">Watchlist</Link>
          </div>
          <div>
            <Link to="/watched">Watched</Link>
          </div>
          <div>
            <Link to="/account">Account</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/account">
          <Account />
        </Route>

        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default Navbar;
