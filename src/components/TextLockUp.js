import React, { useState } from 'react';
import styled from 'styled-components';
import Shoe from '../static/shoe1.jpg';

const TextLockUp = props => {

    const textLockUpSections = [
        {
          icon: "icon-package.svg",
          heading: "Free Shipping Globally",
          details: "Delivery in 4 Days"
        },
    ]

    return (
        <div className="textlockup">
            <div className="img">
                <img src={require(`../static/${props.image}.jpg`)} alt="Shoe" />
            </div>
            <div className="new">{ props.new }</div>
            <div className="sale">{ props.sale }</div>
            <div className="collection">{ props.collection }</div>
            <div className="details">{ props.details }</div>
        </div>

    );
};

export default TextLockUp;

