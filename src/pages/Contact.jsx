import React, { useRef, useState } from 'react'
import {BsEyeSlash}   from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import './contact.css';
const Contact = () => {

  const [show,setShow] = useState(true);

  const inputPassword = useRef(null);

  const copyPassword = async()=>{
    inputPassword.current.focus();
    inputPassword.current.select();
    let password = inputPassword.current.value;
    await navigator.clipboard.writeText(password);
  }

  return (
    <div className='contact-form'>
        
        <input type={show?"text":"password"} ref={inputPassword}  placeholder='Enter password' />
        <button className='btn' onClick={()=>setShow(!show)}>{!show? <BsEyeSlash />:<LiaEyeSolid />}</button>
        <button onClick={copyPassword}>Copy Password</button>
        <input type="text" placeholder='Paste password.!!' />
    </div>
  )
}

export default Contact