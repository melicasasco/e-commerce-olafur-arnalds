import React from 'react';
import './Header.css';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";



function Header () { 
       return (
            <nav className="navbar nav">
            <Link to="/" >
                <img className='logo' src={logo} alt="logo" height="80px"></img>
            </Link>
                <div className="links">
                    <ul>
                        <Link to="/shop" className="nav__item">SHOP</Link>
                        <Link to="/about" className="nav__item">ABOUT</Link>
                        <Link to="/contact" className="nav__item">CONTACT</Link>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        )
    }

export default Header;


