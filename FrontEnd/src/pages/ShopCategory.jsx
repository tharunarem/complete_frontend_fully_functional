import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assests/dropdown_icon.png'
import Item from '../components/items/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shopCategory'>
      <img className='shop-img-banner' src={props.banner} alt="" />
      <div className="shop-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shop-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-products">
        {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null
            }
        })}
      </div>
      <div className="shop-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory