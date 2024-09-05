import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <nav className="footer-navbar">
          <NavLink
            id="shift_nav"
            to="/map-page"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Alumni Map
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/contact-us"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Contact Us: +123-456-7890
                        UTmhatre@gmail.com
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/feedback-form"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Give Feedback
          </NavLink>
          
          <div className="newsletter-section">
            <label htmlFor="newsletter-email" className="newsletter-label">
              Enter your email ID to get our newsletter:
            </label>
            <input
              type="email"
              id="newsletter-email"
              className="newsletter-input"
              placeholder="Your Email"
            />
            <button className="subscribe-button">
              Subscribe
            </button>
          </div>
        </nav>
    
      </footer>
      <Outlet />
    </div>
  );
};

export default Footer;
