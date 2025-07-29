import React from 'react';
import logo from '../assets/images/Logo.svg';

const Header = () => {
    return (
        <header className="site-header">
            <nav className="main-navigation">
                <div className="logo">
                    <img src={logo} alt="Little Lemon Restaurant" />
                </div>
                <ul className="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );

};

export default Header;