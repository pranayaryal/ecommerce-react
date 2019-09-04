import React from 'react';
import { ProductConsumer } from '../context';

const CartDisplay = () => {
    return (
        <div>
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
                                    <td> <img src={require(`../static/products/${item.img}`)} />
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
            </section>


        </div>
    );
}


export default CartDisplay;
