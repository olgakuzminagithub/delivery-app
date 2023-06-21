import React from 'react';
import ShopSidebar from './ShopSidebar';
import ShopList from './ShopList';


const ShopsPage = ({products, cart, addToCart, shops, activShop, handleShopChange}) => {

  let shopToPost =[];
  cart.length > 0 ? shopToPost.push(activShop) : shopToPost = [...shops]
 
  return (
    <div className="shop">
      <ShopSidebar shops={shopToPost} activShop={activShop} handleShopChange={handleShopChange}/>
      <ShopList menu={products} addToCart={addToCart}/>
    </div>
  )
}

export default ShopsPage;
