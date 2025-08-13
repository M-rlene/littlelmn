import React from 'react';
import greekSalad from '../assets/images/greek salad.jpg';
import bruschetta from '../assets/images/bruchetta.svg';
import lemonDessert from '../assets/images/lemon dessert.jpg';

const Specials = () => {
    const specialsData = [
        {
            id: 1,
            name: "Greek Salad",
            price: "$12.99",
            image: greekSalad,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy croutons."
        },
        {
            id: 2,
            name: "Bruschetta",
            price: "$7.99",
            image: bruschetta,
            description: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            id: 3,
            name: "Lemon Dessert",
            price: "$5.99",
            image: lemonDessert,
            description: "A timeless treat that comes straight from grandma's recipe book, tangy-sweet, with a burst of citrus in every bite."
        }
    ];

    // Delivery icon SVG component
    const DeliveryIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7h-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h1.17A3 3 0 0 0 9 16a3 3 0 0 0 2.83 2H14a3 3 0 0 0 2.83-2H19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM5 5h8a1 1 0 0 1 1 1v1H4V6a1 1 0 0 1 1-1zm4 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9-2h-1.17A3 3 0 0 0 14 12a3 3 0 0 0-2.83 2H9.17A3 3 0 0 0 6 12a3 3 0 0 0-2.83 2H2V8h16v6z" fill="currentColor"/>
        </svg>
    );

    return (
        <section className="specials-section">
            <div className="container">
                <div className="specials-header">
                    <h2>This week's specials!</h2>
                    <button className="primary-button">Online Menu</button>
                </div>
                <div className="specials-grid">
                    {specialsData.map(special => (
                        <article key={special.id} className="special-card">
                            <img src={special.image} alt={special.name} />
                            <div className="special-content">
                                <div className="special-header">
                                    <h3>{special.name}</h3>
                                    <span className="price">{special.price}</span>
                                </div>
                                <p>{special.description}</p>
                                <button className="order-delivery-btn">
                                    <span>Order a Delivery</span>
                                    <DeliveryIcon />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;