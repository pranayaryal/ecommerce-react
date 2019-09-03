import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom'
import { ProductConsumer } from '../context';


const Navbar = () => {

    return (
        <header>
            <h1>Skyline Ivy</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all">All</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Female">Women</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Male">Men</NavLink>
                    </li>
                    <ProductConsumer>
                        {value => {
                            const cartLength = Object.keys(value.cart).length;
                            if (cartLength > 0) {
                                return <li>
                                    <div className="carttotal" >{Object.keys(value.cart).length}</div>
                                    <NavLink to="/cart">Cart</NavLink>
                                </li>

                            }
                            else {
                                return <li>
                                    <NavLink to="/cart">Cart</NavLink>
                                </li>
                            }
                        }

                        }
                    </ProductConsumer>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
