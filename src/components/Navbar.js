import React from 'react';
import styled from 'styled-components';

const Navbar = () => {

    return (
        <header>
            <h1>Skyline Ivy</h1>
           <nav>
                <ul>
                    <li>
                        <a exact to="/">Home</a>
                    </li>
                    <li>
                        <a to="/all" exact="true">All</a>
                    </li>
                    <li>
                        <a to="/women">Women</a>
                    </li>
                    <li>
                        <a to="/men">Men</a>
                    </li>
                    <li>
                        <div className="carttotal" v-if="cartCount > 0">3</div>
                        <a to="/cart">Cart</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
