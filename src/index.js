import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StripeProvider } from 'react-stripe-elements'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { ProductProvider } from './context';

ReactDOM.render(

    <ProductProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductProvider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
