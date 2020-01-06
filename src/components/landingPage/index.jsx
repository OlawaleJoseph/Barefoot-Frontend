import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container-fluid row justify-content-center align-items-center m-auto p-auto welcome-image">
    <div className="d-flex flex-column text-center align-items-center">
      <h3>Travel made easy</h3>
      <p>Travel easy. Travel fast. Travel smooth</p>
      <div className="btn btn-primary px-3">
        <Link to="/register">Travel Now!!!</Link>
      </div>
    </div>
  </div>
);
