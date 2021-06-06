import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

class Header extends Component {
    render() {
        return (
            <nav className="navbar nav">
            <img src={logo} alt="logo" height="80px"></img>
                <div className="links">
                    <ul>
                        <li className="nav__item"><a href="/">CD</a></li>
                        <li className="nav__item"><a href="/">VINYL</a></li>
                        <li className="nav__item"><a href="/">SHEET MUSIC</a></li>
                        <li className="nav__item"> <a href="/">TOUR</a></li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        )
    }
}

export default Header;


