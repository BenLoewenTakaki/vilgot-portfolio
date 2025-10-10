import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <svg className="hero-wave" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '150px',
                zIndex: 1
            }}>
                <path fill="rgba(245, 245, 245, 0.3)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <h1>Vilgot Pettersson</h1>
                <a href="/Vilgot_Pettersson_CV.pdf" className="button" download>
                    Download CV
                </a>
            </div>
        </section>
    );
};

export default Hero;