import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-wrapper px-5 py-3">
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent px-5">
      <Link className="navbar-brand mr-sm-3 text-white" to="/register"> BareFoot </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav align-items-center mr-4">
          <li className="nav-item pl-3">
            <Link className="nav-link" to="/">
                HOME
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item pl-3">
            <Link className="nav-link" to="/">ABOUT</Link>
          </li>
          <li className="nav-item dropdown pl-3">
            <Link className="nav-link" to="/register">FAQ</Link>
          </li>
        </ul>
        <Link className="nav-link login-btn text-center" to="/login">LOGIN</Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
