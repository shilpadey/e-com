
import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import ProductsList from './components/Products/ProductsList';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      <Header onShow={showCartHandler}/>
      {cartShow && <Cart onHideCart={hideCartHandler}/>}
      <main>
        <ProductsList />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
