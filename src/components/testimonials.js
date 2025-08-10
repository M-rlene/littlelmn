import React from 'react';
import crlyWoman from "../assets/images/crlywoman.jpg";
import smilingMan from "../assets/images/smilingman.jpg";
import blndeWoman from "../assets/images/blndewoman.jpg";
import bundledMan from "../assets/images/bundledman.jpg";
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonialsData =[
        {
            id: 1,
            rating: 5,
            customerName: "Asahi",
            customerPhoto: crlyWoman,
            review: "Great food and friendly servers."
        },
        {
            id: 2,
            rating: 5,
            customerName: "Razhon",
            customerPhoto: smilingMan,
            review: "Tried the greek salad and it was so crisp and refreshing."
        },
        {
            id: 3,
            rating: 5,
            customerName: "Neena",
            customerPhoto: blndeWoman,
            review: "The best lemon dessert in town."
        },
        {
            id: 4,
            rating: 4,
            customerName: "Maximillian",
            customerPhoto: bundledMan,
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
                                {[...Array(5)].map((star, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            color={index < testimonial.rating ? "#FFD700" : "#e4e5e9"}
                                        />
                                    );
                                })}
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