import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#563D7C" }}
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand" href="/">
            INDIAN RAILWAYS
          </a>
          <Router>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact={true} activeClassName='active' className="nav-link" to='/' onClick= {() =>window.location.href="/" }>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='active' className="nav-link"  to='/About' onClick= {() =>window.location.href="./About" }>About</NavLink>
            </li>
          </ul>
          </Router>
      </div>
    </nav>
  );
}

export default Navbar;
