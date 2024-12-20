import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breakcrums from '../components/Breakcrums/Breakcrums';
import ProductDisplay from '../components/Productdisplay/ProductDisplay';
import RelatedProduct from '../components/RelatedCloths/RelatedProduct';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id===Number(productId));    
  return (
    <div>
      <Breakcrums product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProduct/>
    </div>
  )
}

export default Product