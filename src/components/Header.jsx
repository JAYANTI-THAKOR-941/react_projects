import { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Header = ()=>{

    const [isAuth,setIsAuth] = useState(false);

    const onLogin = ()=>{
        setIsAuth(true);
        alert('Login Successfully.!')
    }

    const onLogout = ()=>{
        setIsAuth(false);
        alert('Logout successfully..!!');
    }

    return(
        <div className="header">
            <div className="logo">
                <h1>TechStartUp</h1>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="btns">
               {
                 isAuth ? (
                    <button onClick={onLogout}>Logout</button>
                 ):
                 (
                    <button onClick={onLogin}>Login</button>
                 )
               }
            </div>
        </div>  
    )
}

export default Header;