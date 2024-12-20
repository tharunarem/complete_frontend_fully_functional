import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assests/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalAmount,all_product,cartItem,removeTocart}=useContext(ShopContext)
  return (
    <div className='CartItems'>
        <div className="cart-items-menu">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if (cartItem[e.id]>0){
                return <div>
                
                            <div className="items-format cart-items-menu">
                                <img src={e.image} alt="" className='icon'/>
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className='cart-btn'>{cartItem[e.id]}</button>
                                <p>₹{e.new_price*cartItem[e.id]}</p>
                                <img className='remove-icon' src={remove_icon} onClick={()=>{removeTocart(e.id)}} alt="" />
                            
                            </div>
                            <hr />
                        </div>
                        
            }
            return null
        })}
        <div className="cart-items-down">
            <div className="cart-items-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="total-item">
                         <p>Subtotal</p>
                        <p>₹{getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                       
                    </div>
                    <hr />
                    <div className="total-item">
                        <h6>Total</h6>
                        <h6>₹{getTotalAmount()}</h6>
                        
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="promocode">
                <p>If you have a promo code Please enter here</p>
                <div className="promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItems