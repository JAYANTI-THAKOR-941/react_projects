import { useState } from 'react';
import './contact.css';
import CopyClipboard from './CopyClipboard';

const Contact = ()=>{

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = ()=>{
    if(name === "" || email === "" || message === ""){
      setError("All filed are required.!");
    }
    else if(!email.includes('@')){
      setError("Please enter valid email.!!");
    }
    else{
      setError("");
    }
  }

  return(
    <>
      <div className="form-container">
        <h1>Contact Us</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
        <textarea name="msg" onChange={(e)=>setMessage(e.target.value)} placeholder="Message"></textarea>
        <button onClick={handleSubmit}>Send Message</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </div>

        <CopyClipboard/>
      
    </>
  )
}

export default Contact;