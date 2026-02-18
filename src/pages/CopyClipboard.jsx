import React, { useRef } from 'react'
import './contact.css';

const CopyClipboard = () => {

    const password = useRef(null);

    const copyPassword = async () => {
        password.current.focus();
        password.current.select();
        let pass = password.current.value;
        navigator.clipboard.writeText(pass);
        alert("Password copy successfully.!!");
    }

    return (
        <div style={{ margin: "4% auto", width: "700px" }}>
            <input type="text" ref={password} placeholder='Enter password.!' />
            <button onClick={copyPassword}>Copy Password</button>
            <input type="text" placeholder='Paste Here.!!' />
        </div>
    )
}

export default CopyClipboard