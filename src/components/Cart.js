import React from 'react';
import CartSteps from './CartSteps';
// import CartDisplay from './CartDisplay';
import CartDisplayTesting from './CartDisplayTesting';

const Cart = () =>
    <div>
        <CartSteps />
        <hr />
        <h1 className="center">Your Cart</h1>
        {/* <CartDisplay /> */}
        <CartDisplayTesting />


    </div>

export default Cart;