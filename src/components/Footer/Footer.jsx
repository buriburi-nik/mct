import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const handleSocialMediaClick = (platform) => {
    console.log(`Navigating to ${platform}`);
  };

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  
  const handleMenuClick = (item) => {
    if (item === 'Home') {
      navigate('/');
    } else {
      const sectionId = item.toLowerCase().replace(' ', '-');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-section left">
          <img src={assets.logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-text">
            © 2024 Delicious Eats. All rights reserved.
            <br />
            Made with ❤️ in India
            <br />
            <span className="footer-links">
              <a href="/privacy">Privacy Policy</a> | 
              <a href="/terms"> Terms & Conditions</a>
            </span>
          </p>
          <div className="social-media">
            {[assets.facebook_icon, assets.twitter_icon, assets.linkedin_icon].map((icon, index) => (
              <img 
                key={index}
                src={icon} 
                alt={`Social Media ${index + 1}`} 
                className="social-icon"
                onClick={() => handleSocialMediaClick(['Facebook', 'Twitter', 'LinkedIn'][index])}
              />
            ))}
          </div>
        </div>

              <div className="footer-section centre">
        <h2 className="section-title">Company</h2>
        <ul className="footer-menu">
          {['Home', 'About Us', 'Delivery', 'FAQ'].map((item, index) => (
            <li 
              key={index}
              className="menu-item"
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

<div className="footer-section right">
  <h2 className="section-title">Contact</h2>
  <ul className="contact-info">
    <li className="contact-item">
      <span className="contact-icon">📍</span>
      <span>123 Gourmet Street,<br/>Food City, Nagpur</span>
    </li>
    <li className="contact-item">
      <span className="contact-icon">📞</span>
      <a href="tel:+1234567890">+1 (234) 567-890</a>
    </li>
    <li className="contact-item">
      <span className="contact-icon">📧</span>
      <a href="mailto:support@deliciouseats.com">support@deliciouseats.com</a>
    </li>
  </ul>
</div>

      </div>
      
      <div className="footer-bottom">
        <p>Delivering deliciousness since 2024</p>
      </div>
    </div>
  );
};

export default Footer;