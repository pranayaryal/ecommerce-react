import React from 'react';
import './App.scss';
import Home from './components/Home';
import Cart from './components/Cart';

import Layout from './components/Layout';
import Product from './components/Product';
import { BrowserRouter, Route } from 'react-router-dom';
import { ProductProvider } from './context';
import StoreGrid from './components/StoreGrid';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductProvider>
          <Layout>
              <Route exact path="/" component={Home} />
              {/* <Route path="/all" component={All} /> */}
              {/* <Route path="/women" component={Women} /> */}
              {/* <Route path="/men" component={Men} /> */}
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/:gender" component={StoreGrid} />
              <Route exact path="/product/:id" component={Product} />
          </Layout>
          </ProductProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;