import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  
  return (
    <div className="headers">
      <header>
        <nav className="navbar">
          <NavLink
            id="logos_nav"
            to="/"
            className={({ isActive }) => (isActive ? 'inactive' : 'inactive')}
          >
            <img className="logos_2" src={require('../images/logo.png')} alt="" />
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/home"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            HOME
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/JobPortal"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            SEARCH HOUSE
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/maps"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            INTERACTIVE MAP
          </NavLink>
          <NavLink
            id="shift_nav"
            to="/schemeFinder"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
           GOVERNMENT AIDS 
          </NavLink>
          <NavLink id="shift_nav"
           to="/authentication">
  <button className="signup-button">
    Sign Up →
  </button>
</NavLink>
 
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
