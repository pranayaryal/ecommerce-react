import React, { useState } from 'react';
import { storeProducts } from './static/data'

const ProductContext = React.createContext();

const ProductProvider = props => {

    const [ products, setProducts ] = useState(storeProducts);

    const getMale = () => {
        return products.filter(el => el.gender === "Male")
    }

    const getFemale = () => {
        return products.filter(el => el.gender === "Female")
    }

    const getProduct = id => {
        return products.filter(el => el.id === id)[0]
    }


    return (
        <ProductContext.Provider value={{
            products,
            getMale,
            getFemale,
            getProduct
        }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
