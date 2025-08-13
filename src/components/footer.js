import React from 'react';
import logo2 from '../assets/images/logo2.png';
import { Link } from 'react-router-dom';
// FIX: Import the social media icons
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

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

                    <nav className="footer-nav">
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
                            <p>1234 Eatingwell Way<br/>Chicago, Illinois</p>
                            <p><a href="tel:+1234567890">(123) 456-7890</a></p>
                            <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
                        </address>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        {/* FIX: Replaced text links with imported icons */}
                        <div className="social-links">
                            <a href="https://www.tiktok.com" aria-label="Tiktok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;