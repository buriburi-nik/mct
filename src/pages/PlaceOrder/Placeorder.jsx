import React from 'react'
import './Placeorder.css';
import { useContext } from 'react';
import { storeContext } from '../../storeContext';
import { useNavigate } from 'react-router-dom';

const Placeorder = () => {
  const navigate = useNavigate();

  const {getTotals } = useContext(storeContext)
    const { subtotal, deliveryFee, total } = getTotals()
  return (
    <div className='placeorder'>
      <div className="placeorder-left">
        <p className="title">
          Order Details
        </p>
        <div className="muttli-feild">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>

        <input type="text" placeholder='email address'/>
        <input type="text" placeholder='street'/>

        <div className="muttli-feild">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>

        <div className="muttli-feild">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>

        <input type="text" placeholder='Phone number'/>

      </div>


      <div className="placeorder-right">
          <div className="cart-total  big">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button className="checkout-btn" onClick={()=> navigate('/payment')}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Placeorder
