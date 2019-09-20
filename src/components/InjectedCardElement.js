import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements'
import { ProductConsumer } from '../context';

import cardStyles from './card.module.scss';

const InjectedCardElement = props => {

    return (
        <div>
            <ProductConsumer>
            {value => {
                return <div>
                <CardElement className={cardStyles.stripeCard} style={{base: {fontSize: '18px'}}}/>
                <button className={cardStyles.stripeButton} 
                    onClick={e => value.submitToStripe(props)}>Pay with credit card</button>
                </div>
            }
            }
            </ProductConsumer>
        </div>
    );
}

export default injectStripe(InjectedCardElement);
