import React from 'react';
import crlyWoman from "../assets/images/crlywoman.jpg";
import smilingMan from "../assets/images/smilingman.jpg";
import blndeWoman from "../assets/images/blndewoman.jpg";
import bundledMan from "../assets/images/bundledman.jpg";

const Testimonials = () => {
    const testimonialsData =[
        {
            id: 1,
            rating: "Rating",
            customerName: "Asahi",
            customerPhoto: {crlyWoman},
            review: "Great food and friendly servers."
        },
        {
            id: 2,
            rating: "Rating",
            customerName: "Razhon",
            customerPhoto: {smilingMan},
            review: "Tried the greek salad and it was so crisp and refreshing."
        },
        {
            id: 3,
            rating: "Rating",
            customerName: "Neena",
            customerPhoto: {blndeWoman},
            review: "The best lemon dessert in town."
        },
        {
            id: 4,
            rating: "Rating",
            customerName: "Maximillian",
            customerPhoto: {bundledMan},
            review: "On the weekends it's sometimes hard to get a table, so book in advance if you can."
        }
    ];
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2>Testimonials</h2>
                <div className="testimonials-grid">
                    {testimonialsData.map(testimonial => (
                        <article key={testimonial.id} className="testimonial-card">
                            <div className="rating">
                                <span className="stars">{testimonial.rating}</span>
                            </div>
                            <div className="customer-info">
                                <img
                                    src={testimonial.customerPhoto}
                                    alt={testimonial.customerName}
                                    className="customer-photo"
                                />
                                <cite className="customer-name">{testimonial.customerName}</cite>
                            </div>
                            <blockquote>
                                <p>"{testimonial.review}"</p>
                            </blockquote>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;