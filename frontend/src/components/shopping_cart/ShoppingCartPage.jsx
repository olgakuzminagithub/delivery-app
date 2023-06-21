import React, { useEffect, useState } from 'react';
import ShoppingCartPosition from './ShoppingCartPosition';

const ShoppingCartPage = ({cart, removeFromCart, plusQ, minusQ}) => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");

const [formValid, setFormValid] = useState(false);
const [error, setError] = useState("Fill in all fields of the form");

useEffect (() => {
    if (name && email && phone && address) {
        setFormValid(true)
    } else {
        setFormValid(false)
    }
}, [name, email, phone, address])

const nameHandler = (e) => {
    setName(e.target.value)
}
const emailHandler = (e) => {
    setEmail(e.target.value)
}
const phoneHandler = (e) => {
    setPhone(e.target.value)
}

const addressHandler = (e) => {
    setAddress(e.target.value)
}

let sum = 0;
cart?.forEach(element => {
    sum += element.price * element.qt;
});

function handleSubmit () {
    let cartString = "";
    cart.map(item => {
        cartString += item.position + ": ";
        cartString += item.qt;
        cartString += ", "
    })
    alert("are you shure?");
    const newOrder = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        shopName: cart[0].shopName,
        cart: cartString,
        sum: sum
    }
    console.log(newOrder)
    fetch(`http://localhost:5000/api/orders`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newOrder)
        }).then(data => console.log(data));
     window.location.assign("/delivery-app/order/")
 }

return (
    <div className="shopping-cart">
        <div className="shopping-cart__field">
            <div className="shopping-cart__leftside">
                <form  className="shopping-cart__form">
                    <label htmlFor="name">Name</label>
                    <input onChange={e => nameHandler(e)} value={name} type="text" name="name" id="name"/>
                    <label htmlFor="email">Email</label>
                    <input onChange={e => emailHandler(e)} value={email} type="email" name="email" id="email"/>
                    <label htmlFor="phone">Phone</label>
                    <input onChange={e => phoneHandler(e)} value={phone} type="tel" name="phone" id="phone" />
                    <label htmlFor="address">Adress</label>
                    <input onChange={e => addressHandler(e)} value={address} type="text" name="address" id="address"/>
                </form>
            </div>
            <div className="shopping-cart__rightside">
                {cart?.map((productCart, index) => (
                    <ShoppingCartPosition key={index} productCart={productCart} removeFromCart={removeFromCart} plusQ={plusQ} minusQ={minusQ}/>
                ))}
            </div>
        </div>
         <div className='shopping-cart__sum-field'>
                <p>Totla price <b>{sum.toFixed(2)}</b></p>
                
                <button disabled={!formValid || cart.length === 0} onClick={() => handleSubmit()}>Submit</button>
        </div>
        <div className='shopping-cart__error-field'>
              <p>{!formValid && error}</p>
        </div>
        <div className='shopping-cart__error-field'>
              <p>{ cart.length === 0 && 'Cart is empty'}</p>
        </div>
    </div>
  )
}

export default ShoppingCartPage;