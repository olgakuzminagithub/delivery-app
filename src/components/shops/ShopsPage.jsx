import React from 'react';
import ShopSidebar from './ShopSidebar';
import ShopList from './ShopList';


const ShopsPage = ({cart, addToCart, shopId, shops, handleShopChange}) => {

  let shopToPost =[];
  cart.length > 0 ? shopToPost.push(shops[shopId]) : shopToPost = [...shops]
 
  return (
    <div className="flex gap-4 p-6 border-2 border-black rounded-lg">
      <ShopSidebar shops={shopToPost} handleShopChange={handleShopChange} activId={shopId}/>
      <ShopList menu={shops[shopId].menu} addToCart={addToCart}/>
    </div>
  )
}

export default ShopsPage;
