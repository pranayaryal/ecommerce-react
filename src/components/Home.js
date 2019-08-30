import React from 'react';
import SaleBoxes from './SaleBoxes'
import FeaturedProducts from './FeaturedProducts';
import TextLockUp from './TextLockUp'

import { ProductProvider } from '../context';

const Home = () => {
    return (
        <div>
            <main>
            <ProductProvider>
                <TextLockUp
                new="new"
                sale="Mens Shoes"
                collection="Collection"
                details="Street Style New Fashion"
                image="shoe1"
                />
                <SaleBoxes />
                <TextLockUp
                new="50%"
                sale="Storewide Sale"
                collection="Summer"
                details="all accessories"
                image="bag"
                />
                <FeaturedProducts />
            </ProductProvider>
            </main>
            
        </div>
    );
}

export default Home;
