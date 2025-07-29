import React from "react";
import ownerChefA from "../assets/images/ownerchefa.jpg";
import ownerChefB from "../assets/images/ownerchefb.jpg";

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content">
                    <article className="about-text">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>This is where the restaurant description will be.</p>
                    </article>
                    <div className="about-images">
                        <img src={ownerChefA} alt="Chefs in the kitchen." className="about-image-1" />
                        <img src={ownerChefB} alt="Chefs smiling at work." className="about-image-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;