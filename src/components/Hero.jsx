import React from 'react';
import { GrainPattern } from './CustomSVGs';

const Hero = () => {
    return (
        <section className="hero">
            <GrainPattern />
            <h1>Vilgot Pettersson</h1>
            <p>Film Student & Creative Storyteller at Bath Spa University</p>
            <a href="#films" className="button">
                Explore My Work
            </a>
        </section>
    );
};

export default Hero;