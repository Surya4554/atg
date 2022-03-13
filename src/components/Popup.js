import React from 'react'
import Button from './button.js';
import './Popup.css';

const Popup = ({productDetails, pop}) => {
    const {id, name, title, image ,price} = productDetails;
     
    if(!pop){
        return null;
    }
     return <div className="main">
                 <div>
                    <div className='main-1'>
                     <img src={image} alt="Images" />
                     <h2>BUDGET</h2>
                     <h2>65% OFF</h2>
                     
                  </div >
                  <div className="main-2">
                     <h3> {name} </h3>
                     <h3> 4.4* </h3>
                  </div>
                  <div className='main-3'>
                     <h2> {title} `- ryrrs what you think about this this is very beautiful product do you want to buy it.` </h2>
                     <h2> <span>Rs.<del> 1000 </del></span> <span> {price} </span> <span> 65% OFF</span></h2>
                     <h2>I need multiple popup generates based on an array of content. I am passing content through the component with props but the same content is showing up on all the popups. How can i handle multiple popups with different data per popup?</h2>
                  </div>
                  <Button name="Shop on Brand" />
                </div>
            </div>     
        

   
}

export default Popup;

    