import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home';
import All from './components/All';
import Women from './components/Women';
import Men from './components/Men';
import Cart from './components/Cart';
import Product from './components/Product';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { ProductProvider } from './context';
import StoreGrid from './components/StoreGrid';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductProvider>
          <Navbar />
          <Switch>
            <main>
              <Route exact path="/" component={Home} />
              {/* <Route path="/all" component={All} /> */}
              {/* <Route path="/women" component={Women} /> */}
              {/* <Route path="/men" component={Men} /> */}
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/:gender" component={StoreGrid} />
              <Route exact path="/product/:id" component={Product} />
            </main>
          </Switch>
        </ProductProvider>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;