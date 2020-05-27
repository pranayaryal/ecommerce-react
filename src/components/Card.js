import React from 'react';
import { StripeProvider, Elements, injectStripe, CardElement } from 'react-stripe-elements';
import { ProductConsumer } from '../context';
import InjectedCardElement from './InjectedCardElement';

import cardStyles from './card.module.scss';


const Card = () => {
    return (

        <div id="card-div">
            <div className={cardStyles.cardPayment}>
                <h3>Please enter your payment details:</h3>
                <label htmlFor="email">Email</label>
                <br />
                <input className={cardStyles.emailInput} type="email" id="email" placeholder="name@example.com" />
                <br />
                <label htmlFor="card">Credit Card</label>
                <br />
                <small>
                    Test using this card:
                    <span className="cc-number">4242 4242 4242 4242</span>, and enter any 5 digits for the zip code

                    <StripeProvider apiKey="{key}">
                        <Elements>
                            <InjectedCardElement />
                        </Elements>
                    </StripeProvider>
                </small>
            </div>

        </div>

    );
}

export default Card;
