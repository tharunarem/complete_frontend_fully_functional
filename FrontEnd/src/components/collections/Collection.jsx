import React from 'react'
import './Collection.css'
import hand_icon from '../assests/hand_icon.png'
import arrow_icon from '../assests/arrow.png'
import coll_img from '../assests/hero_image.png'
const Collection = () => {
  return (
    <div className='collection'>
    
        <div className="coll-home">
            <h2>NEW COLLECTION ONLY</h2>
            <div className="coll-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Arrivals</p>
            <p>for Everyone</p>
            <div className="coll-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>     
        <div className="coll-right">
            <img src={coll_img} alt="" />
        </div>
    </div>
  )
}

export default Collection