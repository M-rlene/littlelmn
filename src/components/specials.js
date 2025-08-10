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
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese."
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

    return (
        <section className="specials-section">
            <div className="container">
                <div className="specials-header">
                    <h2>Specials</h2>
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
                                <button className="order-delivery-btn">Order a Delivery</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;