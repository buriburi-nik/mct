import React, { useContext } from 'react';
import "./FoodItem.css";
import { assets } from '../../assets/frontend_assets/assets';
import { storeContext } from '../../storeContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(storeContext);
  


  return (
    <div className='food-item'>
      <div className="food-item-container">
        <img src={image} alt={name} className="food-item-img" />
          {!cartItems[id]
            ?<img src={assets.add_icon_white} alt="Add" className="add-button" onClick={()=>addToCart(id)}/>
           :<div className="food-item-counter">
                  <img src={assets.remove_icon_red} alt="Remove" onClick={()=> removeFromCart(id)}/>
                  <p>{ cartItems[id]}</p>
                  <img src={assets.add_icon_green} alt="Add"  onClick={()=>addToCart(id)} />
              </div>
          
          }
       </div>  
      
      <div className="food-item-details">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desp">{description}</p>
        <p className="food-item-price">₹{Number(price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;