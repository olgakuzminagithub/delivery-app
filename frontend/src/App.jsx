import React, {useEffect, useState, useMemo} from 'react';
import { Routes, Route} from "react-router-dom";
import ShopsPage from "./components/shops/ShopsPage";
import ShoppingCartPage from "./components/shopping_cart/ShoppingCartPage";
import Nav from "./components/common/Nav";
import Order from './components/common/Order';

const API_URL = "http://localhost:5000/api/products";

//function filter by shop
function filterProducts (products, activShop) {
  activShop && 
      (products = products.filter(p => 
          p.shopName.toLowerCase().includes(activShop.toLowerCase())
      ));
  return products;
}


function App() {
  const [products, setProducts] = useState([]);
  const [activShop, setActivShop] = useState("");
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const products = await res.json();
      setProducts(products);
      setActivShop(products[0].shopName);
    } 
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProducts();
  }, [])

  //list of all shops
  const categories = products.reduce(function (acc, product){
    let cat = product.shopName;
    acc[cat] = acc[cat] ? acc[cat] + 1 : 1;
    return acc;
  }, {})

  const shops = Object.keys(categories);

  const handleShopChange = (shopName) => {
    setActivShop(shopName);
  };

  const filteredProducts = useMemo(() =>
    filterProducts(products, activShop),
    [products, activShop]
  );


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
             (cart.map(p => p.id === productCart.id ? {...p, qt: (p.qt + 1)} : p)));
    }
  };

  const plusQ = (id) => {
    setCart((cart) =>
             (cart.map(p => p.id === id ? {...p, qt: (p.qt + 1)} : p)));
  }

  const minusQ = (id) => {
    setCart((cart) =>
             (cart.map(p => (p.id === id && p.qt > 0) ? {...p, qt: (p.qt - 1)} : p)));
  }

  const removeFromCart = (id) => setCart((cart) => cart.filter((t) => t.id !== id));


  return (
    <div className="container mx-auto min-h-screen">
      <Nav cart={cart}/>
      <Routes>
        <Route path="/delivery-app" element={<ShopsPage 
          products={filteredProducts.length > 0 ? filteredProducts : products}
          cart={cart}
          addToCart={addToCart}
          shops={shops}
          activShop={activShop}
          handleShopChange={handleShopChange}
        />}/>
        <Route path="/delivery-app/shopping-cart" element={<ShoppingCartPage 
          cart={cart}
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
