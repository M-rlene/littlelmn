import React, { useState } from 'react';
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="container">
                <nav className="main-navigation" role="navigation" aria-label="Main navigation">
                    <div className="logo">
                        <Link to="/" onClick={closeMenu}>
                            <img src={logo} alt="Little Lemon Restaurant - Home" />
                        </Link>
                    </div>

                {/* Mobile menu button */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="main-menu"
                        aria-label="Toggle navigation menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>

                    <ul
                    className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}
                    id="main-menu"
                    >
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
                        <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
                        <li><Link to="/order" onClick={closeMenu}>Order Online</Link></li>
                        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;