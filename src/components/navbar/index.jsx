import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const guestLinks = (
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item pl-3">
          <Link className="nav-link text-dark" to="/">
                        Home
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item pl-3">
          <Link className="nav-link text-dark" to="/">About</Link>
        </li>
        <li className="nav-item dropdown pl-3">
          <Link className="nav-link text-dark" to="/register">FAQ</Link>
        </li>
      </ul>
      <div className="navbar-nav">
        <Link className="nav-link text-dark" to="/login">Sign In</Link>
      </div>
    </div>
  );

  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-md navbar-dark bg-transparent px-5">
        <Link className="navbar-brand mr-sm-3 text-dark" to="/register"> LOGO </Link>
        <button className="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {guestLinks}
      </nav>
    </div>
  );
};

export default Navbar;
