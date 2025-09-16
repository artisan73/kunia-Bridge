import React from 'react';
import './Mentorship.css';

const Mentorship = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">MENTORSHIP</h2>
      <div className="mentorship-content">
        <h3 className="section-title">FIND A MENTOR</h3>
        <div className="input-group">
          <label htmlFor="location">LOCATION</label>
          <select id="location" className="dropdown-input">
            <option value="">Select Location</option>
            {/* Add real location options here */}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="language">LANGUAGE</label>
          <select id="language" className="dropdown-input">
            <option value="">Select Language</option>
            {/* Add real language options here */}
          </select>
        </div>
        <div className="placeholder-box"></div>
        <div className="placeholder-box"></div>
        <button className="match-button">MATCH</button>
      </div>
      {/* The bottom navigation bar would be included in the main App component, not here */}
    </div>
  );
};

export default Mentorship;