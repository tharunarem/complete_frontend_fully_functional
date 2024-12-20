import React from 'react'
import './EmailRegister.css'
const EmailRegister = () => {
  return (
    <div className='emailRegister'>
        <h1 className='margin'>Get Exclusive Offers </h1>
        <h1>Once You Register with your Email</h1>
        <p>Enter your Email to Subscribe and Stay updated</p>
        <div className="input-email">
            <input type="email"  placeholder='your Email Id' required/>
            <button>Register</button>
        </div>

    </div>
  )
}

export default EmailRegister