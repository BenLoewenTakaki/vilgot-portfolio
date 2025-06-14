import React from 'react';
import { LinkedInIcon, InstagramIcon, YouTubeIcon } from './CustomSVGs';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <a href="https://www.linkedin.com/in/vilgot-pettersson-260812329/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon size={24} color="white" />
                    </a>
                    <a href="https://www.instagram.com/vilgotthegamer/?hl=en" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon size={24} color="white" />
                    </a>
                    <a href="https://www.youtube.com/@Vilgotstuff" target="_blank" rel="noopener noreferrer">
                        <YouTubeIcon size={24} color="white" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Vilgot Pettersson. All rights reserved.<br/>
                    Website designed by Benjamin Takaki
                </p>
            </div>
        </footer>
    );
};

export default Footer;