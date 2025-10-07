import React from 'react';

const ReelSection = () => {
    return (
        <section className="reel-section">
            <div className="container">
                <div className="reel-container">
                    <div className="reel-video-wrapper">
                        <div className="reel-placeholder">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.1"/>
                                <path d="M32 26L56 40L32 54V26Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <h2 className="reel-title">Reel</h2>
                </div>
            </div>
        </section>
    );
};

export default ReelSection;
