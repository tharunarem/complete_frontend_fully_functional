import React from 'react'
import './Footer.css'
import footer_logo from '../assests/logo_big.png'
import insta_img from '../assests/instagram_icon.png'
import pinter_img from '../assests/pintester_icon.png'
import whatsapp_icon from '../assests/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Shopping</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Contact</li>
        </ul>
        <div className="social-media-icons">
            <div className="icons">
                <a href="https://www.instagram.com/tharunarem/"><img src={insta_img} alt="" /></a>
            </div>
            <div className="icons">
                <img src={pinter_img} alt="" />
            </div>
            <div className="icons">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="copy-write">
            <hr />
            <p>Copyright @ 2024 All Rigths Reserved...</p>
        </div>
       
    </div>
  )
}

export default Footer