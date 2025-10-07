import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img 
                            src="/vilgot_picture.jpg"
                            alt="Vilgot Pettersson" 
                            className="about-image"
                        />
                    </div>

                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            I'm Vilgot Pettersson, a film student currently in my second year at Bath Spa University. 
                            I have a huge passion for filmmaking and I always strive to challenge myself in the process. 
                            I have worked in various departments and I am keen on exploring further in some of them.
                        </p>
                        <p>
                            When it comes to my background, my multicultural upbringing shaped me to be open to all 
                            kinds of ideas. I was born in Tokyo, raised by a Swedish father and Malagasy mother and 
                            attended a French school. I'm not afraid of exploring new territory, I want to see how far 
                            my skills can take me and learn from any kind of experience.
                        </p>
                        <p>
                            Beyond filmmaking, I have various side projects including music production, magazine work 
                            and digital art. Although filmmaking is my main focus, I try to venture in other mediums 
                            out of curiosity and to be a jack of all trades.
                        </p>
                    </div>
                </div>

                <div className="about-stats">
                    <div className="stat-card">
                        <div className="stat-number">3rd</div>
                        <div className="stat-label">Year Student</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">2027</div>
                        <div className="stat-label">Expected Graduation</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
