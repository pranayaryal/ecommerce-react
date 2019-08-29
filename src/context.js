import React, { useState } from 'react';
import { storeProducts } from './static/data'

const ProductContext = React.createContext();

const ProductProvider = props => {

    const [ products, setProducts ] = useState(storeProducts);

    return (
        <ProductContext.Provider value={{
            products
        }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
