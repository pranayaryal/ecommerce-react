import React from 'react';

import { ProductConsumer } from '../context';
import Payment from './Payment'

import { Link } from 'react-router-dom';

const CartDisplayTesting = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cart } = value;
                console.log(cart.length)
                if (cart.length > 0) {
                    return (<section className="cartdisplay">
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            {
                                cart.map(item =>
                                    <tr>
                                        <td>
                                            <img src={require(`../static/products/${item.img}`)} className="productimg"
                                            />
                                            <h3 className="productname">{item.name}</h3>
                                        </td>
                                        <td>
                                            <h4 className="price">{item.price}</h4>
                                        </td>
                                        <td>
                                            <strong>{item.count}</strong>
                                        </td>
                                        <td>{item.count * item.price}</td>
                                    </tr>
                                )

                            }

                        </table>
                        <Payment />
                    </section>);
                } else {
                    return <div>
                        <section className="center">
                            <p>Your cart is empty, fill it up!</p>
                            <button className="pay-with-stripe">
                                <Link exact to="/">Back Home</Link>
                            </button>
                        </section>
                        <Payment />
                    </div>
                }
            }
            }
        </ProductConsumer>

    );
}

export default CartDisplayTesting;
