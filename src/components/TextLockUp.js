import React, { useState } from 'react';
import styled from 'styled-components';
import Shoe from '../img/shoe1.jpg';

const TextLockUp = () => {
    console.log('you are herekj')

    const TextLockupStyle =  styled.div`
        display: grid;
        grid-template-columns: 50px 100px 1fr; 
        grid-template-rows: 50px 50px 100px 20px 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        .new {
            grid-area: 1 / 1 / 5 / 4;
            font-size: 23vmin;
            color: #efefef;
            text-transform: uppercase;
        }
        .sale {
            grid-area: 2 / 2 / 3 / 4;
            font-size: 6.5vmin;
            color: #d96528;
            font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .collection {
            grid-area: 3 / 3 / 4 / 4;
            font-size: 8.5vmin;
            font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .details {
            grid-area: 4 / 2 / 5 / 4;
            font-size: 2vmin;
            letter-spacing: 0.2em;
            text-transform: uppercase;
        }
        .img {
            max-width: 950px;
            grid-area: 1 / 3 / 6 / 4;
            img {
            width: 95%;
            }
        }
    `;

    return (
        <div>
            <TextLockupStyle>
                <div className="img">
                    <img src={Shoe} alt="Shoe" />
                </div>
                <div className="new">New</div>
                <div className="sale">Mens Shoes</div>
                <div className="collection">Collection</div>
                <div className="details">Street Style New Fashion</div>


            </TextLockupStyle>

        </div>
    );
};

export default TextLockUp;

