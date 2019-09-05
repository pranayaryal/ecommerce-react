import React from 'react';

const CartSteps = () => {
    return (
        <div>
            <section className="cartsteps">
                <div className="shoppinq">
                    <h2 className="cartstepsh2 active">01</h2>
                    <h4 className="cartstepsh4">Shopping Cart</h4>
                </div>
                <div className="checkout">
                    <h2 className="cartstepsh2">02</h2>
                    <h4 className="cartstepsh4">Check out</h4>
                </div>
                <div className="order">
                    <h2 className="cartstepsh2">03</h2>
                    <h4 className="cartstepsh4">Order Complete</h4>
                </div>
            </section>
            
        </div>
    );
}

export default CartSteps;
