import React from 'react';
import './Signup.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="app-title">KINUA -BRIDGE</h1>
        <p className="app-tagline">From one mother to another</p>

        <form className="signup-form">
          <div className="input-group">
            <input type="text" placeholder="Full Name" className="input-field" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" className="input-field" />
          </div>
          <div className="input-group password-group">
            <input type="password" placeholder="Password" className="input-field" />
            <span className="password-toggle-icon">
              {/* Eye icon for showing/hiding password */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8s1.9-4.72 5.15-7.15m6.87-1.12A10.07 10.07 0 0 1 23 12s-4 8-11 8a10.06 10.06 0 0 1-5.07-1.18"></path>
                <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"></path>
              </svg>
            </span>
          </div>
          <div className="input-group password-group">
            <input type="password" placeholder="Confirm Password" className="input-field" />
            <span className="password-toggle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8s1.9-4.72 5.15-7.15m6.87-1.12A10.07 10.07 0 0 1 23 12s-4 8-11 8a10.06 10.06 0 0 1-5.07-1.18"></path>
                <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"></path>
              </svg>
            </span>
          </div>

          <button type="submit" className="signup-button">CREATE ACCOUNT</button>
        </form>

        <div className="login-link-container">
          <p>Already have an account? <a href="" className="login-link">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;