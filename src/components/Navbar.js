import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <h1>Skyline Ivy</h1>
           <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all" exact="true">All</NavLink>
                    </li>
                    <li>
                        <NavLink to="/women">Women</NavLink>
                    </li>
                    <li>
                        <NavLink to="/men">Men</NavLink>
                    </li>
                    <li>
                        <div className="carttotal" v-if="cartCount > 0">3</div>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
