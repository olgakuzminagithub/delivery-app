import React from 'react'

const ShopSidebar = ({shops, activShop, handleShopChange}) => {
 let button = "sidebar__category";
 let buttonActiv = "sidebar__category sidebar__category_active";
 
  return (
    <div className="shop__sidebar">
        <h2 className="sidebar__title">Shops:</h2>
        {shops.map((shop, index) => (
            <div className={(shops.length ===1 || shop === activShop) ? buttonActiv : button} 
                key={index} 
                onClick={() => handleShopChange(shop)}>
                {shop}
            </div>
        ))}
    </div>
  )
}

export default ShopSidebar