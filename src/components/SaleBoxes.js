import React, { useState } from 'react';
import styled from 'styled-components';

const SaleBoxes = () => {
    const boxes = [
        {
          icon: "/icon-package.svg",
          heading: "Free Shipping Globally",
          details: "Delivery in 4 Days"
        },
        {
          icon: "/icon-cal.svg",
          heading: "24/7 Customer Service",
          details: "Call us any time"
        },
        {
          icon: "/icon-service.svg",
          heading: "Easy Online Returns",
          details: "Send Within 30 Days"
        }
      ];
    return (
        <div>
            <section className="boxes">
              {
                boxes.map((box,ix) => {
                  <div className={`box{ix}`}>
                    <img src={box.icon} alt="service icon" />
                    <h4>{ box.heading }</h4>
                    <p>{ box.details }</p>
                  </div>
                })
              }
            </section>
            
        </div>
    );
}

export default SaleBoxes;
