import React from 'react'
import './Related.css'
import data_product from '../assests/data'
import Item from '../items/Item'

const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-items">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>
    </div>
  )
}

export default RelatedProduct