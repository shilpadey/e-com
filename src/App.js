
import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import ProductsList from './components/Products/ProductsList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <ProductsList />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
