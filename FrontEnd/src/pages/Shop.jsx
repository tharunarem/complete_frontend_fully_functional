import React from 'react'
import Collection from '../components/collections/Collection'
import Item from '../components/items/Item'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/newcollections/NewCollections'
import EmailRegister from '../components/emailRegister/EmailRegister'


const Shop = () => {
  return (
    <div>
      <Collection/>
      <Item/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <EmailRegister/>
      
    </div>
  )
}

export default Shop