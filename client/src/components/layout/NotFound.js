// Import Links
import React from 'react';
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="container notFound">
    <h1 className='x-large text-warning'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
    </div>
     
  );
};

// Export Link
export default NotFound;