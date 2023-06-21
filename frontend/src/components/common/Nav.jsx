import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({cart}) {
  let q = 0;
  cart?.forEach(element => {
    q += element.qt;
  }); 

  let classQ = "nav-quanty";
  let classQActiv = "nav-quanty_active";

  return (
    <nav className='nav'>
        <NavLink to="/delivery-app" className="nav__link"> 
            Shop
        </NavLink>
        <NavLink to="/delivery-app/shopping-cart" className="nav__link relative">
            Shopping cart 
            <div className={ q > 0 ? classQActiv : classQ}>{q}</div>
        </NavLink>
    </nav>
  )
}

export default Nav