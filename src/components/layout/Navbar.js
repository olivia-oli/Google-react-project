import React from 'react';
// Import the NavLink component from the react-router-dom library, which is used for navigation in the app
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      {/* NavLink component creates a link to the '/home' route. 
          The className prop conditionally applies the 'active' class if the link is active. */}
      <NavLink
        to='/home'
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Home
      </NavLink>{' '}
      {/* Separator between links */}|
      {/* NavLink component creates a link to the '/profile/1' route. 
          The className prop conditionally applies the 'active' class if the link is active. */}
      <NavLink
        to='/profile/1'
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Profile
      </NavLink>{' '}
      {/* Separator between links */}|
      {/* NavLink component creates a link to the '/settings' route. 
          The className prop conditionally applies the 'active' class if the link is active. */}
      <NavLink
        to='/settings'
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
