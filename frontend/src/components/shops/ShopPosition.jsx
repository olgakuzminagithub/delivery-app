import React from 'react';

const ShopPosition = ({item, addToCart}) => {
function handleClick() {
    const productCart = {...item, qt: 1};
    addToCart(productCart);
}

return (
    <div className="flex flex-col p-6 border-2 border-black rounded-lg">
        <div className="h-60 bg-gray-300 mb-2">

        </div>
        <div className='flex justify-between mb-2'>
            <h3>{item.position}</h3>
            <p>${item.price}</p>
        </div>
        <div className='flex justify-end'>
            <p className='rounded-lg p-2 bg-gray-500 text-white hover:bg-gray-800' onClick={() => handleClick()}>Add to cart</p>
        </div>
    </div>
  )
}

export default ShopPosition

