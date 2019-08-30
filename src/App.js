import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home';
import All from './components/All';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/all" component={All} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;