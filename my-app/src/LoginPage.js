import React from 'react';
import './Login.css'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="app-title">KINUA - BRIDGE</h1>
        <p className="app-tagline">From one mother to another</p>

        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Email or Mobile" className="input-field" />
          </div>
          <div className="input-group password-group">
            <input type="password" placeholder="Password" className="input-field" />
            <span className="password-toggle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8s1.9-4.72 5.15-7.15m6.87-1.12A10.07 10.07 0 0 1 23 12s-4 8-11 8a10.06 10.06 0 0 1-5.07-1.18"></path>
                <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"></path>
              </svg>
            </span>
          </div>

          <button type="submit" className="login-button">LOG IN</button>
        </form>

        <div className="link-options">
          <a href="/signup" className="link">Sign Up</a>
          <a href="#" className="link forgotten-password">Forgotten Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;