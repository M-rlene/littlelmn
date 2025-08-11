import React from 'react';
import logo from '../assets/images/Logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="site-header">
            <nav className="main-navigation">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Little Lemon Restaurant" />
                    </Link>
                </div>
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );

};

export default Header;