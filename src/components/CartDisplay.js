import React from 'react';
import { ProductConsumer } from '../context';
import Card from './Card';

const CartDisplay = () => {
    return (
        <section className="cartdisplay">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        return cart.map(item =>
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
                        );

                    }
                    }
                </ProductConsumer>

            </table>
            <section className="payment">
                <Card />
                <div className="total">
                    <div className="caption">
                        <p>
                            <strong>Subtotal:</strong>
                        </p>
                        <p>Shipping</p>
                        <p className='golden'>Total:</p>
                    </div>
                    <div className="num">
                        <p>
                            <strong>10</strong>
                        </p>
                        <p>Free Shipping</p>
                        <p className="golden">100</p>
                    </div>
                </div>

            </section>
        </section>

    );
}


export default CartDisplay;
