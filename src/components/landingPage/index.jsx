import React from 'react';
import Navbar from '../navbar';

export default () => (
  <div className="container-fluid row justify-content-center align-items-center m-auto p-auto landing-page-image">
    <Navbar />
    <div className="overlay w-100 h-100" />
    <div className="d-flex flex-column text-center align-items-center landing-message-div">
      <h3>Travel made easy</h3>
      <p>Travel easy. Travel fast. Travel smooth</p>
      <button className="btn btn-primary px-3" type="button">Travel Now!!!</button>
    </div>
  </div>
);
