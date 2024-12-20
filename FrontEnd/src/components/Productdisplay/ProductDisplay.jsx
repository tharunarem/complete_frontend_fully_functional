import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assests/star_icon.png'
import star_dull_icon from '../assests/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext);
  return (
    <div className='ProductDisplay'>
        <div className="product-left">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-img">
                <img className='main-img'src={product.image} alt="" />
            </div>
        </div>
        <div className="product-right">
            <h1>{product.name}</h1>
            <div className="product-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-right-prices">
                <div className="price-old">₹{product.old_price}</div>
                <div className="new-price">₹{product.new_price}</div>
            </div>
            <div className="product-right-des">Elevate your wardrobe with our stunning Floral Print Maxi Dress, designed to make a statement with every step.
             Crafted from lightweight and breathable fabric, this dress offers both style and comfort for any occasion.
             </div>
             <div className="right-size">
                <h1>Select size</h1>
                <div className="right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
             </div>
             <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className="right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
             <p className="right-category"><span>Tags :</span>Modern, Latest</p>
    
        </div>

    </div>
  )
}

export default ProductDisplay