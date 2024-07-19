import React, { useState } from 'react'
import '../Loginsignup.css'
import user from '../../assets/Assets/person.png'
import email from '../../assets/Assets/email.png'
import password from '../../assets/Assets/password.png'

const Loginsignup = () => {
  const [action, setAction] = useState("Login")


  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action} </div>
        <div className='underline'></div>
        </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
          <img src={user} alt=''/>
          <input type='text' placeholder='Name'/>
        </div>}
        <div className='input'>
          <img src={email} alt=''/>
          <input type='email' placeholder='Email id'/>
        </div>
        <div className='input'>
          <img src={password} alt=''/>
          <input type='password' placeholder='Password'/>
        </div>
      </div>
      <div className='forget-password'>Forget password? <span>Click Here</span></div>
      <div className='sumbit-container'>
        <div className={action==="Login"?"sumbit gray ":"sumbit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"sumbit gray":"sumbit"}onClick={() => {setAction("Login")}}>Login</div>
        </div>
      </div>
  )
}

export default Loginsignup