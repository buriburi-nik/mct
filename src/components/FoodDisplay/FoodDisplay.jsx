import React, { useContext } from 'react';
import "./FoodDisplay.css";
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes to try</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => 
            category === "All" || item.category === category
          )
          .map((item, index) => (
            <FoodItem 
              key={index} 
              id={item._id} 
              name={item.name}
              description={item.description}  
              price={item.price} 
              image={item.image} 
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;