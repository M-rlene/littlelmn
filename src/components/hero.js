import React from 'react';
import restaurantFood from '../assets/images/restaurantfood.jpg';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hero-description">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button className="primary-button">Reserve a Table</button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src={restaurantFood} alt="Delicious Mediterranean food" />
                </div>
            </div>
        </section>
    );
};

export default Hero;