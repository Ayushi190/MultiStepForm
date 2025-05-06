import React from 'react';
import './completed.css';

const Completed = () => {
  return (
    <div className="completed-container">
      <div className="completed-content">
        <h1 className="completed-title">Great! Thank You for Applying</h1>
        <p className="completed-message">
          We appreciate your application. Our team will review it, and we'll
          <br />
          reach out soon if there's a match. Stay tuned!
        </p>
        <button className="track-button">TRACK APPLICATION</button>
      </div>
    </div>
  );
};

export default Completed;