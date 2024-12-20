import React from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="inputs-feilds">
        <h1>Sign Up</h1>
        <div className="more-inputs">
          <input className='style ' type="text" placeholder='Your Name' />
          <input className='style ' type="email" placeholder='Email Address' />
          <input className='style ' type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login'>Already have an account? <span>Login Here</span></p>
        <div className="login-btn">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I Agree terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup