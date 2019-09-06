import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements'
import { ProductConsumer } from '../context';

const InjectedCardElement = props => {

    return (
        <div>
            <ProductConsumer>
            {value => {
                return <div>
                <CardElement className="stripe-card" style={{base: {fontSize: '18px'}}}/>
                <button className="pay-with-stripe-button" 
                    onClick={e => value.submitToStripe(props)}>Pay with credit card</button>
                </div>
            }

            }
            </ProductConsumer>
        </div>
    );
}

export default injectStripe(InjectedCardElement);
