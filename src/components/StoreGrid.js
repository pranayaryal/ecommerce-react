import React, { useState } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

import storegridStyles from './storegrid.module.scss';

import Aside from './Aside';

const StoreGrid = ({ match }) => {
    const [pricerange, setPricerange] = useState(200);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    console.log(match.params.gender)

    const handlePriceRange = e => {
        setPricerange(e.target.value);
    }

    return (
            <ProductConsumer>
                {value => {
                    const products = value.getProductsFromParam(match.params.gender);
                    console.log(value.products)
                    return <div className="storegrid">
                     <section className="content">
                        { value.products.map(product =>
                                <div className={storegridStyles.item} key={product.id}>
                                    <div className={storegridStyles.imgContain}>
                                        <Link to={`/product/${product.id}`}>
                                            <img src={require(`../static/products/${product.img}`)} />
                                        </Link>
                                    </div>
                                    <h3>{product.name}</h3>
                                    <h4 className="price">{product.price}</h4>
                                    <Link to={`/product/${product.id}`}>
                                        <button className="multi-item">View Item ></button>
                                    </Link>
                                </div>
                            )
                        }
                    </section>
                    {match.params.gender !== 'cart' ? <Aside cart={value} /> : null}
                    </div>
                }}
            </ProductConsumer>

    );
}

export default StoreGrid;
