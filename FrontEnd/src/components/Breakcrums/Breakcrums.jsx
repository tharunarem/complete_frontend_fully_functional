import React from 'react'
import './Breakcrums.css'
import arrow_icon from '../assests/breadcrum_arrow.png'
const Breakcrums = (props) => {
    const {product}=props;
  return (
    <div className='Breakcrums'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breakcrums