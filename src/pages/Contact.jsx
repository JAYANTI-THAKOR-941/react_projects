import React, { useState } from 'react'
import {BsEyeSlash}   from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import './contact.css';
const Contact = () => {

  const [show,setShow] = useState(true)

  return (
    <div className='contact-form'>
        
        <input type={show?"text":"password"}  placeholder='Enter password' />
        <button className='btn' onClick={()=>setShow(!show)}>{!show? <BsEyeSlash />:<LiaEyeSolid />}</button>

    </div>
  )
}

export default Contact