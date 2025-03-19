// src/pages/PlaceOrder/Placeorder.jsx
import React, { useContext, useState } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link, useNavigate } from 'react-router-dom'

const Placeorder = () => {
  const { cartItems, food_list, setCartItems } = useContext(StoreContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  })

  // Calculate total amount
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === Number(item))
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the order to a backend
    alert('Order placed successfully!')
    setCartItems({}) // Clear cart
    navigate('/') // Redirect to home
  }

  return (
    <div className='placeorder-container'>
      <div className='placeorder-items'>
        <h1>Complete Your Order</h1>
        {Object.keys(cartItems).length === 0 ? (
          <div className='empty-cart'>
            <h2>Your cart is empty</h2>
            <Link to='/'>
              <button>Go to Menu</button>
            </Link>
          </div>
        ) : (
          <div className='order-process'>
            <div className='order-summary'>
              <h2>Order Summary</h2>
              {food_list.map((item) => {
                if(cartItems[item.id] > 0) {
                  return (
                    <div className='order-item' key={item.id}>
                      <p>{item.name} x {cartItems[item.id]}</p>
                      <p>${item.price * cartItems[item.id]}</p>
                    </div>
                  )
                }
                return null
              })}
              <div className='order-total'>
                <h3>Total:</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>

            <div className='order-form'>
              <h2>Delivery Information</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label>Full Name</label>
                  <input 
                    type='text' 
                    name='name' 
                    value={formData.name} 
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Email</label>
                  <input 
                    type='email' 
                    name='email' 
                    value={formData.email} 
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Address</label>
                  <textarea 
                    name='address' 
                    value={formData.address} 
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Phone</label>
                  <input 
                    type='tel' 
                    name='phone' 
                    value={formData.phone} 
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='form-actions'>
                  <button type='submit'>Place Order</button>
                  <Link to='/cart'>
                    <button type='button' className='back-to-cart'>Back to Cart</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Placeorder