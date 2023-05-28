import React from 'react'

const ShopSidebar = ({shops, handleShopChange, activId}) => {
 let button = "border-2 p-2 text-center border-black rounded-sm mb-6";
 let buttonActiv = "border-2 p-2 text-center border-black rounded-sm mb-6 bg-gray-500";
 
  return (
    <div className="w-1/4 flex flex-col p-6 border-2 border-black rounded-lg">
        <h2 className="text-center mb-6">Shops:</h2>
        {shops.map((shop, index) => (
            <div className={(shops.length ===1 || index === activId) ? buttonActiv : button} 
                key={index} 
                onClick={() => handleShopChange(index)}>
                {shop.shopName}
            </div>
        ))}
    </div>
  )
}

export default ShopSidebar