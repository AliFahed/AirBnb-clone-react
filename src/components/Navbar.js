import React from 'react';
import AirBnb_Logo from '../images/airbnb-logo.svg';

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={AirBnb_Logo} alt="AirBnb Logo" className="airbnb-logo" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
