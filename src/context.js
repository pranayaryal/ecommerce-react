import React, { useState } from 'react';
import { storeProducts } from './static/data'

const ProductContext = React.createContext();

const ProductProvider = props => {

    const [ products, setProducts ] = useState(storeProducts);

    const getMale = () => {
        return products.filter(el => el.gender === "Male");
    }

    const getFemale = () => {
        return products.filter(el => el.gender === "Female");
    }

    const getProduct = id => {
        return products.filter(el => el.id === id)[0]
    }

    const getProductsFromParam = param => {
      if (param === "all"){
        return products;
      }
      else {
        console.log(products.filter(el => el.gender === param));
        return products.filter(el => el.gender === param);
      }

    }


    return (
        <ProductContext.Provider value={{
            products,
            getMale,
            getFemale,
            getProduct,
            getProductsFromParam
        }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
