import React from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";
import { FaUsers, FaShoppingCart, FaBook, FaHeartbeat } from 'react-icons/fa';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1 className="app-title">KINUA-BRIDGE</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </header>
      <main className="main-content">
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">Communities</button>
        </div>
        <div className="content-list">
          {/* Placeholder */}
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
        </div>
      </main>
      
      <button className="fab-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <nav className="bottom-navigation">
        <div className="nav-item">
          <FaUsers size={24} />
          <Link to="/mentorship" className="flex items-center">
          <span className="nav-label">Mentorship</span>
          </Link>
        </div>
        <div className="nav-item">
          <FaShoppingCart size={24} />
          <span className="nav-label">Marketplace</span>
        </div>
        <div className="nav-item">
          <FaBook size={24} />
          <span className="nav-label">Cultural wisdom Wall</span>
        </div>
        <div className="nav-item">
          <FaHeartbeat size={24} />
          <span className="nav-label">Mental Health Check-Ins</span>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;