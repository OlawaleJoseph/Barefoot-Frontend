import React from 'react';

// eslint-disable-next-line react/prop-types
export default ({ component }) => (
  <div className="bg-primary px-auto py-auto w-100 max-height">
    <div className="container-fluid form-wrapper row justify-content-center m-auto">
      {component}
    </div>
  </div>

);
