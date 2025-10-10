import React from 'react';

const ReelSection = () => {
    return (
        <section className="reel-section">
            <div className="container">
                <div className="reel-container">
                    <div className="reel-video-wrapper">
                        <video 
                            controls 
                            width="100%" 
                            style={{ borderRadius: '8px' }}
                        >
                            <source src="/Vilgot_Pettersson_Showreel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h2 className="reel-title">Vilgot Pettersson Showreel</h2>
                </div>
            </div>
        </section>
    );
};

export default ReelSection;
