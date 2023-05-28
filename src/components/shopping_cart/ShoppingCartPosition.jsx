import React from 'react'

const ShoppingCartPosition = ({productCart, removeFromCart, plusQ, minusQ}) => {
  return (
    <div className="relative flex items-center p-6 border-2 border-black rounded-lg mb-2">
        <div className="w-1/2 h-40 bg-gray-300">
        </div>
        <div className='w-1/2 text-center'>
            <h3>{productCart.position}</h3>
            <p>${productCart.price}</p>
            <div className='flex justify-center'>
                <span className='border-2 border-black p-1'onClick={() => minusQ(productCart.id)}>-</span>
                <p className='border-t-2 border-b-2 border-black p-1'>{productCart.sum}</p>
                <span className='border-2 border-black p-1' onClick={() => plusQ(productCart.id)}>+</span>
            </div>
        </div>
        <div className="absolute top-2 right-2 border-2 border-black rounded-full px-2" onClick={() => removeFromCart(productCart.id)}>X</div>
    </div>
  )
}

export default ShoppingCartPosition