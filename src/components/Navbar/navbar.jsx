import React, { useContext, useState } from 'react'; 
import "./navbar.css";
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { storeContext } from '../../storeContext';
import AuthModal from '../SignIn/AuthModal';
import{hum} from  "../../../public/image.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { getTotals } = useContext(storeContext);

  const handleOpenAuthModal = () => setShowAuthModal(true);
  const handleCloseAuthModal = () => setShowAuthModal(false);

  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <Link to="/" onClick={() => setActiveMenu("home")}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      
      <ul className="menu">
        {menuOpen && (
          <li className="close-menu">
            <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              X
            </button>
          </li>
        )}
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
        <li className="mobile-signin">
           <button onClick={handleOpenAuthModal}>Sign In</button>
        </li>
      </ul>

      <div className="nav-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="basket-container">
          <Link to='/cart' onClick={() => setMenuOpen(false)}>
            <img src={assets.basket_icon} alt="Basket" />
            {getTotals().subtotal > 0 && <div className="dot"></div>}
          </Link>
        </div>
        <button className="sign-in-btn" onClick={handleOpenAuthModal}>
          Sign In
        </button>
        
      </div>

      <img
        src={hum}
        alt="Menu Toggle"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {showAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
    </div>
  );
};

export default Navbar;
