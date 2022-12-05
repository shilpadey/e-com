
import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import About from './components/pages/About';
import Store from './components/pages/Store';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <Switch>
      <CartProvider>
        <Header onShow={showCartHandler}/>
        {cartShow && <Cart onHideCart={hideCartHandler}/>}
        <main>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/store" exact>
            <Store />
          </Route>
          <Route path="/store/:productId">
            <ProductDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </main>
        <Footer />
      </CartProvider>
    </Switch>
  );
}

export default App;
