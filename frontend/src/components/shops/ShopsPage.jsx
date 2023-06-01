import React from 'react';
import ShopSidebar from './ShopSidebar';
import ShopList from './ShopList';


const ShopsPage = ({products, cart, addToCart, shops, activShop, handleShopChange}) => {

  let shopToPost =[];
  cart.length > 0 ? shopToPost.push(activShop) : shopToPost = [...shops]
 
  return (
    <div className="flex gap-4 p-6 border-2 border-black rounded-lg">
      <ShopSidebar shops={shopToPost} activShop={activShop} handleShopChange={handleShopChange}/>
      <ShopList menu={products} addToCart={addToCart}/>
    </div>
  )
}

export default ShopsPage;
