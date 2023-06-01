import React from 'react';
import ShopPosition from './ShopPosition';


const ShopList = ({menu, addToCart}) => {

  return (
    <div className="w-3/4 p-6 grid gap-4 grid-cols-2 border-2 border-black rounded-lg">
        {menu.map((item) => (
            <ShopPosition key={item.id} item={item} addToCart={addToCart}/>
        ))}
    </div> 
  )
}

export default ShopList