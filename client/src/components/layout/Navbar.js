import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
       
          <Link className="navbar-brand" to="/">
            Accounting's Month-End Tasks!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task">
                  Task
                </Link>
              </li>
            </ul>
          </div>
        
      </nav>
    );
  }
}

export default Navbar;