import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({cart}) {
  let q = 0;
  cart?.forEach(element => {
    q += element.sum;
  }); 

  let classQ = "hidden";
  let classQActiv = "absolute -top-4 -right-8 border-2 border-blue-600 bg-blue-600 rounded-full px-2 text-white";

  return (
    <nav className='flex'>
        <NavLink to="/" className="text-blue-600 m-10"> 
            Shop
        </NavLink>
        <NavLink to="/shopping-cart" className="text-blue-600 m-10 relative">
            Shopping cart 
            <div className={ q > 0 ? classQActiv : classQ}>{q}</div>
        </NavLink>
    </nav>
  )
}

export default Nav