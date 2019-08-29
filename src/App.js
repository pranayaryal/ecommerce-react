import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar'
import TextLockUp from './components/TextLockUp'
import SaleBoxes from './components/SaleBoxes'
import FeaturedProducts from './components/FeaturedProducts';
import { ProductProvider } from './context';


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ProductProvider>
          <TextLockUp
            new="new"
            sale="Mens Shoes"
            collection="Collection"
            details="Street Style New Fashion"
            image="shoe1"
          />
          <SaleBoxes />
          <TextLockUp
            new="50%"
            sale="Storewide Sale"
            collection="Summer"
            details="all accessories"
            image="bag"
          />
          <FeaturedProducts />
        </ProductProvider>

      </main>

    </div>
  );
}

export default App;