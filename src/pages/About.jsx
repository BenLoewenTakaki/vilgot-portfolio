import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header />
            
            <section className="section" style={{ 
                paddingTop: 'clamp(6rem, 15vw, 8rem)', 
                background: 'var(--gray)' 
            }}>
                <div className="container">
                    <div className="section-header">
                        <h1 style={{
                            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                            fontWeight: '700',
                            background: 'var(--gradient-1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: 'var(--spacing-md)',
                            lineHeight: '1.2'
                        }}>
                            About Vilgot
                        </h1>
                    </div>

                    {/* Main content grid - responsive */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'clamp(2rem, 5vw, 4rem)',
                        alignItems: 'center',
                        marginBottom: 'var(--spacing-xl)'
                    }} className="about-grid">
                        {/* Image container - responsive */}
                        <div style={{
                            aspectRatio: '1',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            maxWidth: '400px',
                            width: '100%',
                            margin: '0 auto',
                            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
                        }} className="about-image">
                            <img 
                                src="/vilgot_picture.jpg"
                                alt="Vilgot Pettersson" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover' 
                                }} 
                            />
                        </div>

                        {/* Text content - responsive */}
                        <div style={{ 
                            fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', 
                            lineHeight: '1.8', 
                            color: '#555',
                            minWidth: '0' // Prevents text overflow
                        }}>
                            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                                I'm Vilgot Pettersson, a film student currently in my second year at Bath Spa University. I have a huge passion for filmmaking and I always strive to challenge myself in the process. I have worked in various departments and I am keen on exploring further in some of them.
                            </p>

                            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                                When it comes to my background, my multicultural upbringing shaped me to be open to all kinds of ideas. I was born in Tokyo, raised by a Swedish father and Malagasy mother and attended a French school. I'm not afraid of exploring new territory, I want to see how far my skills can take me and learn from any kind of experience.
                            </p>

                            <p>
                                Beyond filmmaking, I have various side projects including music production, magazine work and digital art. Although filmmaking is my main focus, I try to venture in other mediums out of curiosity and to be a jack of all trades.
                            </p>
                        </div>
                    </div>

                    {/* Stats grid - responsive */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'clamp(1rem, 3vw, 2rem)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }} className="about-stats">
                        <div style={{
                            textAlign: 'center',
                            background: 'white',
                            padding: 'clamp(1.5rem, 4vw, 2rem)',
                            borderRadius: '15px',
                            boxShadow: '0 5px 15px var(--shadow)',
                            border: '1px solid rgba(0, 188, 255, 0.1)',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                fontWeight: '700',
                                background: 'var(--gradient-1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: '1.2'
                            }}>
                                3rd
                            </div>
                            <div style={{ 
                                color: '#666', 
                                fontWeight: '500', 
                                marginTop: 'var(--spacing-xs)',
                                fontSize: 'clamp(0.9rem, 2.2vw, 1rem)'
                            }}>
                                Year Student
                            </div>
                        </div>

                        <div style={{
                            textAlign: 'center',
                            background: 'white',
                            padding: 'clamp(1.5rem, 4vw, 2rem)',
                            borderRadius: '15px',
                            boxShadow: '0 5px 15px var(--shadow)',
                            border: '1px solid rgba(11, 218, 81, 0.1)',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                fontWeight: '700',
                                background: 'var(--gradient-2)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: '1.2'
                            }}>
                                10+
                            </div>
                            <div style={{ 
                                color: '#666', 
                                fontWeight: '500', 
                                marginTop: 'var(--spacing-xs)',
                                fontSize: 'clamp(0.9rem, 2.2vw, 1rem)'
                            }}>
                                Projects Completed
                            </div>
                        </div>

                        <div style={{
                            textAlign: 'center',
                            background: 'white',
                            padding: 'clamp(1.5rem, 4vw, 2rem)',
                            borderRadius: '15px',
                            boxShadow: '0 5px 15px var(--shadow)',
                            border: '1px solid rgba(250, 250, 51, 0.1)',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                fontWeight: '700',
                                background: 'var(--gradient-3)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: '1.2'
                            }}>
                                2027
                            </div>
                            <div style={{ 
                                color: '#666', 
                                fontWeight: '500', 
                                marginTop: 'var(--spacing-xs)',
                                fontSize: 'clamp(0.9rem, 2.2vw, 1rem)'
                            }}>
                                Expected Graduation
                            </div>
                        </div>
                    </div>

                    {/* Additional info section */}
                    <div style={{
                        marginTop: 'var(--spacing-xl)',
                        background: 'white',
                        borderRadius: '20px',
                        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                        boxShadow: '0 10px 30px var(--shadow)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                            fontWeight: '600',
                            marginBottom: 'var(--spacing-sm)',
                            background: 'var(--gradient-1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            My Creative Journey
                        </h3>
                        <p style={{
                            fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
                            lineHeight: '1.7',
                            color: '#666',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            From Tokyo to Bath, my journey has been shaped by diverse cultures and creative exploration. 
                            Each project is an opportunity to push boundaries and discover new ways of visual storytelling. 
                            Whether behind the camera, in the editing suite, or composing music, I'm always seeking that 
                            perfect blend of technical skill and artistic vision.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;