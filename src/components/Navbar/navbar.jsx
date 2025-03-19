import React, { useState } from 'react';
import "./navbar.css";
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Services</li>
        <li>Contact</li>
        <li className="sign-in-menu-item">Sign In</li>
      </ul>
      <div className="nav-ri">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="basket-container">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>
      <img
        src={assets.hamburger_icon}
        alt="Menu Toggle"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </div>
  );
};

export default Navbar;