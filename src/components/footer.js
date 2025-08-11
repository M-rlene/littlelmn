import React from 'react';
import logo2 from '../assets/images/logo2.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">

                    <div className="footer-logo">
                        <Link to="/">
                            <img src={logo2} alt="Little Lemon" />
                        </Link>
                    </div>
                    {}
                    <nav className="footer-nav doormat-nav">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/booking">Reservations</Link></li>
                            <li><Link to="/order">Order Online</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <address>
                            <p>1234 Eatingwell Way, Chicago, Illinois 12345</p>
                            <p><a href="tel:+1234567890">Phone Number</a></p>
                            <p><a href="mailto:info@littlelemon.com">Email</a></p>
                        </address>
                    </div>

                    <div className="footer-social">
                        <h4>Social Media Links</h4>
                        <div className="social-links">
                            <a href="#" aria-label="Tiktok">Tiktok</a>
                            <a href="#" aria-label="Instagram">Instagram</a>
                            <a href="#" aria-label="Twitter">X</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;