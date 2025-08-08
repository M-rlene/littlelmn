import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">

                    <div className="footer-logo">
                        <img src="" alt="Little Lemon" />
                    </div>
                    {}
                    <nav className="footer-nav doormat-nav">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#reservations">Reservations</a></li>
                            <li><a href="#order">Order Online</a></li>
                            <li><a href="#login">Login</a></li>
                        </ul>
                    </nav>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <address>
                            <p>1234 Eatingwell Way,
                                Chicago, Illinois 12345</p>
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