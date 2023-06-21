import React from 'react';
import IconFastFood from '../common/IconFastFood.jsx';

const ShopPosition = ({item, addToCart}) => {
function handleClick() {
    const productCart = {...item, qt: 1};
    addToCart(productCart);
}

return (
    <div className="list__position">
        <div className="position__img">
            <IconFastFood/>
        </div>
        <div className="position__info">
            <h3>{item.position}</h3>
            <p>${item.price}</p>
        </div>
        <div className="position__button-field">
            <p className="position__button" onClick={() => handleClick()}>Add to cart</p>
        </div>
    </div>
  )
}

export default ShopPosition

