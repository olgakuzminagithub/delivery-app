import React from 'react';
import ShopPosition from './ShopPosition';


const ShopList = ({menu, addToCart}) => {

  return (
    <div className="shop__list">
        {menu.map((item, index) => (
            <ShopPosition key={index} item={item} addToCart={addToCart}/>
        ))}
    </div> 
  )
}

export default ShopList