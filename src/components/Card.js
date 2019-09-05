import React from 'react';

const Card = () => {
    return (
        <div id="card-div">
            <div className="card-payment">
                <h3>Please enter your payment details:</h3>
                <label for="email">Email</label>
                <br />
                <input type="email" id="email" placeholder="name@example.com"/>
                <br />
                <label for="card">Credit Card</label>
                <br />
                <small>
                    Test using this card:
                    <span className="cc-number">4242 4242 4242 4242</span>, and enter any 5 digits for the zip code
                </small>
                <button className="pay-with-stripe-button">Pay with credit card</button>
            </div>
            
        </div>
    );
}

export default Card;
