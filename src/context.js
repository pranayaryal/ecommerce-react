import React, { useState } from 'react';
import { storeProducts } from './static/data'

const ProductContext = React.createContext();

const ProductProvider = props => {

    const [products, setProducts] = useState(storeProducts);

    const [ cart, setCart ] = useState([]);

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
        if (param === "all") {
            return products;
        }
        else {
            return products.filter(el => el.gender === param);
        }

    }

    const addToCart = id => {

        let tempProducts = [...products]
        const index = tempProducts.indexOf(getProduct(id))
        const product = tempProducts[index]
        product.count = 1
        const price = product.price
        product.total = price
        setCart([...cart, product])

    }




    return (
        <ProductContext.Provider value={{
            products,
            getMale,
            getFemale,
            getProduct,
            getProductsFromParam,
            addToCart,
            cart
        }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
