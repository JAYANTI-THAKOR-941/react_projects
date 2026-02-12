import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!email.includes('@')){
            setError("Please enter valid email.!!")
        }
        else if(password.length<6){
            setError("Password should be greater then 8 character.!!")
        }
        else{
            alert("Login successfully.!")
            setError("");
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' />
            <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' />
            <button>Login</button>
        </form>
        {error&&<p>{error}</p>}
    </div>
  )
}

export default Login