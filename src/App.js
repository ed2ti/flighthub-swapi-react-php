/* React Library */
import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

/* Project Pages */
import People from './pages/People';
import StarShips from './pages/StarShips';
import Planets from './pages/Planets';
import SearchPerson from './pages/SearchPerson';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <img src="img/star-wars-logo.png" height="42" />
          <ul className="header">
            <li>
              <NavLink exact to="/">People</NavLink>
            </li>
            <li>
              <NavLink to="/starships">StartShips</NavLink>
            </li>
            <li>
              <NavLink to="/planets">Planets</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search Person</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={People} />
            <Route path="/starships" component={StarShips} />
            <Route path="/planets" component={Planets} />
            <Route path="/search" component={SearchPerson} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
