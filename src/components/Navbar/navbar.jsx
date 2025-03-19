import React, { useState } from 'react';
import "./navbar.css";
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <Link to="/" onClick={() => setActiveMenu("home")}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      
      <ul className="menu">
        <li>
          <Link 
            to='/' 
            className={activeMenu === "home" ? "active" : ""}
            onClick={() => {
              setActiveMenu("home");
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to='/menu' 
            className={activeMenu === "menu" ? "active" : ""}
            onClick={() => {
              setActiveMenu("menu");
              setMenuOpen(false);
            }}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link 
            to='/services' 
            className={activeMenu === "services" ? "active" : ""}
            onClick={() => {
              setActiveMenu("services");
              setMenuOpen(false);
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to='/contact' 
            className={activeMenu === "contact" ? "active" : ""}
            onClick={() => {
              setActiveMenu("contact");
              setMenuOpen(false);
            }}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="nav-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="basket-container">
          <Link to='/cart' onClick={() => setMenuOpen(false)}>
            <img src={assets.basket_icon} alt="Basket" />
            <div className="dot"></div>
          </Link>
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