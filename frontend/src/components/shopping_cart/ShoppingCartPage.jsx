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
    <div className="p-6 border-2 border-black rounded-lg">
        <div className='flex gap-4 mb-4'>
            <div className="w-1/2 p-6 border-2 border-black rounded-lg">
                <form  className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input onChange={e => nameHandler(e)} value={name} type="text" name="name" id="name" className=' border-2 border-black mb-2'/>
                    <label htmlFor="email">Email</label>
                    <input onChange={e => emailHandler(e)} value={email} type="email" name="email" id="email" className=' border-2 border-black mb-2' />
                    <label htmlFor="phone">Phone</label>
                    <input onChange={e => phoneHandler(e)} value={phone} type="tel" name="phone" id="phone" className=' border-2 border-black mb-2' />
                    <label htmlFor="address">Adress</label>
                    <input onChange={e => addressHandler(e)} value={address} type="text" name="address" id="address" className=' border-2 border-black mb-2'/>
                </form>
            </div>
            <div className="w-1/2 p-6 border-2 border-black rounded-lg max-h-[60vh] overflow-scroll">
                {cart?.map((productCart, index) => (
                    <ShoppingCartPosition key={index} productCart={productCart} removeFromCart={removeFromCart} plusQ={plusQ} minusQ={minusQ}/>
                ))}
            </div>
        </div>
         <div className='flex justify-end items-center mb-2'>
                <p className='px-4'>Totla price <b>{sum.toFixed(2)}</b></p>
                
                <button disabled={!formValid || cart.length === 0} className='rounded-lg py-2 px-4 bg-green-500 text-white: disabled:bg-gray-300' onClick={() => handleSubmit()}>Submit</button>
        </div>
        <div className='flex justify-end items-center'>
              <p className='text-[10px]'>{!formValid && error}</p>
        </div>
        <div className='flex justify-end items-center'>
              <p className='text-[10px]'>{ cart.length === 0 && 'Cart is empty'}</p>
        </div>
    </div>
  )
}

export default ShoppingCartPage;