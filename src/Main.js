import React from 'react';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from "react-use-cart"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Main() {
  return (
    <>
    <CartProvider>
        <Home/>
        <Cart/>
    </CartProvider>

    </>
  )
}

export default Main