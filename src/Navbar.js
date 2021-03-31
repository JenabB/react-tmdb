import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Watchlist from "./pages/Watchlist";
import Watched from "./pages/Watched";
import Account from "./pages/Account";
import MovieDetail from "./components/MovieDetail";

import home from "./assets/images/icon-tmdb-home.png";
import discover from "./assets/images/icon-tmdb-category.png";
import watchlist from "./assets/images/icon-tmdb-watchlist.png";
import watched from "./assets/images/icon-tmdb-watched.png";
import account from "./assets/images/icon-tmdb-account.png";

const Navbar = () => {
  return (
    <Router>
      <nav className="navigation-bar">
        <div className="navbar-side">
          <div style={{ marginLeft: 0 }}>
            <Link to="/">
              <img src={home} alt="icon" width="20px" />
              <h1>Home</h1>
            </Link>
          </div>
          <div>
            <Link to="/discover">
              <img src={discover} alt="icon" width="20px" />
              <h1>Discover</h1>
            </Link>
          </div>
          <div>
            <Link to="/watchlist">
              <img src={watchlist} alt="icon" width="20px" />
              <h1>Watchlist</h1>
            </Link>
          </div>
          <div>
            <Link to="/watched">
              <img src={watched} alt="icon" width="20px" />
              <h1>Watched</h1>
            </Link>
          </div>
          <div>
            <Link to="/account">
              <img src={account} alt="icon" width="20px" />
              <h1>Account</h1>
            </Link>
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
