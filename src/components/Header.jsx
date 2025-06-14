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
                            <Link 
                                to="/" 
                                className={isHomePage ? 'active' : ''}
                            >
                                Home
                            </Link>
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
                                href="#projects" 
                                onClick={(e) => handleSectionClick(e, '#projects')}
                            >
                                Projects
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
                        <li>
                            <Link 
                                to="/about" 
                                className={location.pathname === '/about' ? 'active' : ''}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;