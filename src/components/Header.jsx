import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        
        if (!isHomePage) {
            // Navigate to home page first, then scroll to section
            navigate('/');
            // Small delay to ensure page loads before scrolling
            setTimeout(() => {
                const element = document.querySelector(sectionId);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        } else {
            // If we're on home page, just scroll to section
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (!isHomePage) {
            navigate('/');
        }
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className="header">
            <div className="container">
                <div className="branding">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>Vilgot Pettersson</h1>
                    </Link>
                </div>
                <nav className="navigation">
                    <ul>
                        <li>
                            <a 
                                href="#top" 
                                onClick={handleHomeClick}
                                className={isHomePage ? 'active' : ''}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                onClick={(e) => handleSectionClick(e, '#about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                onClick={(e) => handleSectionClick(e, '#projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#films" 
                                onClick={(e) => handleSectionClick(e, '#films')}
                            >
                                Films
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#music" 
                                onClick={(e) => handleSectionClick(e, '#music')}
                            >
                                Music
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;