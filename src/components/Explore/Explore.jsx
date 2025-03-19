import React from 'react';
import './Explore.css';
import { menu_list } from '../../assets/frontend_assets/assets';


const Explore = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id = 'explore-menu'> 
      <h1>
      Explore <span>Our Menu</span> 
      </h1>
      <p className='explore-menu-text'>
        Click on a category to see our specialty dishes.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
              <p>{item.menu_name}</p>
             
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Explore
