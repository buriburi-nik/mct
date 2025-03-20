import React, { useContext } from 'react'
import './Cart.css'
import { storeContext } from '../../storeContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotals } = useContext(storeContext)
  const { subtotal, deliveryFee, total } = getTotals()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Remove</p>
          <p>Total</p>
        </div>
        <hr />
        
        {food_list.map((item) => { 
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <img src={item.image} alt="food" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                <p>${item.price * cartItems[item._id]}</p>
              </div>
            )
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
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
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>

        <div className="cart-promo">
          <p>If you have a promo code, you can apply it at checkout</p>
          <div className="cart-promo-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart