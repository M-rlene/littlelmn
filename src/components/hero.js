import React from 'react';
import restaurantFood from '../assets/images/restaurantfood.jpg';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="hero-description">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className="primary-button">Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src={restaurantFood} alt="Delicious Mediterranean food" />
            </div>
        </section>
    );
};

export default Hero;