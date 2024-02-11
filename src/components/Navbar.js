import React from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo2} alt="logo" />
      </div>
      <div className="rightSide">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/l" activeClassName="active">
          Learn More
        </NavLink>
        <NavLink to="/a" activeClassName="active">
          About Us
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;