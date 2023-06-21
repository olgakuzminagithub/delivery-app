import React from 'react';
import IconFastFood from '../common/IconFastFood.jsx';

const ShoppingCartPosition = ({productCart, removeFromCart, plusQ, minusQ}) => {
  return (
    <div className="shopping-cart__item">
        <div className="shopping-cart__img">
            <IconFastFood/>
        </div>
        <div className="shopping-cart__info">
            <h3 className="shopping-cart__subtitle">{productCart.position}</h3>
            <p className="shopping-cart__price">${productCart.price}</p>
            <div className='shopping-cart__quanty'>
                <span className='shopping-cart__quanty-field' onClick={() => minusQ(productCart._id)}>-</span>
                <p className='shopping-cart__quanty-field'>{productCart.qt}</p>
                <span className='shopping-cart__quanty-field' onClick={() => plusQ(productCart._id)}>+</span>
            </div>
        </div>
        <div className="shopping-cart__item-close" onClick={() => removeFromCart(productCart._id)}>X</div>
    </div>
  )
}

export default ShoppingCartPosition