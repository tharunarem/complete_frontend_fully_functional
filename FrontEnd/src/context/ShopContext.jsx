import React, { createContext, useState } from "react";
import all_product from '../components/assests/all_product'



export const ShopContext = createContext(null);

const getDefaultValue=()=>{
    let cart={}
    for (let index=0;index<all_product.length+1; index++){
        cart[index]=0;
    }
    return cart
}
const ShopContextProvide=(props)=>{
    const [cartItem,setCartItems]=useState(getDefaultValue());
   

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem)
    }
    const removeTocart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalAmount=()=>{
        let totalAmount =0
        for(const item in cartItem){
            if(cartItem[item]>0){
                let iteminfo=all_product.find((product)=>product.id===Number(item))
                totalAmount += iteminfo.new_price*cartItem[item]
            }
           
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem=0
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item];
            }
        }
        return totalItem
    }


    const contextValue = {getTotalAmount,all_product,cartItem,addToCart,removeTocart,getTotalCartItems}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvide;