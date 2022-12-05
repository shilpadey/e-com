
import React, { useState, useContext } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
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
import AuthContext from './store/auth-context';
import Auth from './components/pages/Auth';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const authCntx = useContext(AuthContext);

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
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/store" exact>
            {authCntx.isLoggedIn && <Store />}
            {!authCntx.isLoggedIn && <Redirect to='/login'/>}
          </Route>
          <Route path="/store/:productId">
            <ProductDetail />
          </Route>
          <Route path="/about">
            {authCntx.isLoggedIn && <About />}
            {!authCntx.isLoggedIn && <Redirect to='/login'/>}
          </Route>
          <Route path="/login">
            <Auth /> 
          </Route>
          <Route path="/contact">
            {authCntx.isLoggedIn && <Contact />}
            {!authCntx.isLoggedIn && <Redirect to='/login'/>}
          </Route>
          <Route path='*'>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
