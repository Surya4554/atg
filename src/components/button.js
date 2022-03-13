import React from 'react';
import './button.css';
const Button = (props) => {
  return (
    <div className='btn-detail'>
        <button className='btn'>{props.name}</button>
    </div>
  )
}

export default Button;
