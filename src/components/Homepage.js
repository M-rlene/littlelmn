import React from 'react';
import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';

const Homepage = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
};

export default Homepage;