import React, { useState } from 'react';
import storegridStyles from './storegrid.module.scss';
import { ProductConsumer } from '../context';

const Aside = (props) => {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [rangeValue, setRangeValue] = useState(200);
    console.log('you are in storegrid')

    const handleRange = e => {
        // setRangeValue(e.target.value)
        // console.log(rangeValue)
        setRangeValue(e.target.value)
        return props.cart.handlePriceRange(rangeValue)
    }

    return (

        <aside className={storegridStyles.storeAside}>
            <h3>Special Sales</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?</p>
            <h3>Filter by Price:</h3>
            <p style={{ 'marginTop': '5px' }}>
                Max Price <strong>{rangeValue}</strong>
            </p>
            <span className="min">{min}</span>
            <input type="range"
                className="slider"
                id="pricerange"
                step="0.1"
                min="0"
                max="200"
                value={rangeValue}

                onChange={handleRange}
            />
            <span className="max">{max}</span>
        </aside>


    );
}

export default Aside;
