import React, {useState} from 'react';
import {product} from './api.js';
import Cart from './cart.js';
import './cart.css'


const uniqueCategory = [...new Set(product.map((curElem) =>{
   return curElem.category;
}))];

const Product = () =>{
  const [data, setdata] = useState([]);
  
  
  const [categoryList] = useState(uniqueCategory);
  const filterItem = (category) =>{
      const updateList = product.filter((curElem) =>{
          return curElem.category === category;
      });
      setdata(updateList);
  };
   return(
        <div>
        <h1 className='tag'>Tagged Products</h1>
        {data && categoryList.map(category => {
          return <Cart filterItem={filterItem} categoryName={category} data={data} />
        })}
        </div>
    )
}
export default Product;
