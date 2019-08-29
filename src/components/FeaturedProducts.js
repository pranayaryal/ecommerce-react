import React from 'react';
import { ProductConsumer } from '../context';

const FeaturedProducts = () => {
    return (
        <div>
            <section className="featuredproducts">
                <h2><span>Featured Products</span></h2>
            </section>
            <div className="featureditems">
                <ProductConsumer>
                    {value => value.products.slice(0, 3).map(product =>
                        <div className="item" key={product.id}>
                            <img src={require(`../static/products/${product.img}`)} />
                            <h3>{product.name}</h3>
                            <h4>{product.price}</h4>
                            <a href="/id">
                                <button className="multi-item">
                                    View Item >
                                </button>
                            </a>
                        </div>
                    )
                    }
                </ProductConsumer>
            </div>
        </div>
    );
}

export default FeaturedProducts;
