import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order you Favourite Food here</h2>
        <p>
          Place your order, pay securely, and enjoy your meal!
        </p>
        <button onClick={()=> navigate('/menu')}>View Menu</button>
      </div>
      
    </div>
  )
}

export default Header
