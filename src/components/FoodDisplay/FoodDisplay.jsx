import React, { useContext, useState } from 'react';
import "./FoodDisplay.css";
import FoodItem from '../FoodItem/FoodItem';
import { storeContext } from '../../storeContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);
  const [visibleCount, setVisibleCount] = useState(8);
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); 

  let filteredList = food_list.filter((item) => 
    (category === "All" || item.category === category) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOption === "name") {
    filteredList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "price-asc") {
    filteredList.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filteredList.sort((a, b) => b.price - a.price);
  }

  const handleToggle = () => {
    setVisibleCount(expanded ? 8 : filteredList.length);
    setExpanded(!expanded);
  };

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes to try</h2>

      <div className="food-controls">
        <input 
          type="text" 
          placeholder="Search food..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-dropdown"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="food-display-list">
        {filteredList.slice(0, visibleCount).map((item, index) => (
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

    
      {filteredList.length > 8 && (
        <button className="toggle-btn" onClick={handleToggle}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default FoodDisplay;
