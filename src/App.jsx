import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import ShopsPage from "./components/shops/ShopsPage";
import ShoppingCartPage from "./components/shopping_cart/ShoppingCartPage";
import Nav from "./components/common/Nav";
import Order from './components/common/Order';
import shops from "./data/shops"

function App() {
  const [shopId, setShopId] = useState(0);
  const [cart, setCart] = useState([]);

  const handleShopChange = (id) => {
    setShopId(id);
  }

  const addToCart = (productCart) => {
    let isinArray = false;
    cart.forEach(el  => {
        if (el.id === productCart.id)
         isinArray = true
    })
    if(!isinArray) {
        setCart(p => [...p, productCart])
    } else {
        setCart((cart) =>
             (cart.map(p => p.id === productCart.id ? {...p, sum: (p.sum + 1)} : p)));
    }
  };

  const plusQ = (id) => {
    setCart((cart) =>
             (cart.map(p => p.id === id ? {...p, sum: (p.sum + 1)} : p)));
  }

  const minusQ = (id) => {
    setCart((cart) =>
             (cart.map(p => (p.id === id && p.sum > 0) ? {...p, sum: (p.sum - 1)} : p)));
  }

  const removeFromCart = (id) => setCart((cart) => cart.filter((t) => t.id !== id));


  return (
    <div className="container mx-auto min-h-screen">
      <Nav cart={cart}/>
      <Routes>
        <Route path="/delivery-app" element={<ShopsPage 
          cart={cart}
          addToCart={addToCart}
          shopId={shopId}
          shops={shops}
          handleShopChange={handleShopChange}
        />}/>
        <Route path="/delivery-app/shopping-cart" element={<ShoppingCartPage 
          cart={cart}
          shop={shops[shopId].shopName}
          removeFromCart={removeFromCart}
          plusQ={plusQ}
          minusQ={minusQ}
        />}/>
        <Route path='/delivery-app/order' element={<Order/>}/>
      </Routes>
    </div>
  );
}

export default App;
