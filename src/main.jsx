import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import pingSystem from './utils/pingSystem';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enhanced navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle hash navigation on page load
    const handleHashNavigation = () => {
        const hash = window.location.hash;
        if (hash) {
            // Small delay to ensure page is fully rendered
            setTimeout(() => {
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    };

    // Handle hash navigation immediately and on hash change
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    // Smooth scrolling for navigation links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update URL hash
                history.pushState(null, null, targetId);
            }
        }
    });

    // Header scroll effect with improved performance
    let ticking = false;
    const updateHeader = () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Ping system initialization
    if (import.meta.env.PROD) {
        console.log('🚀 Production mode detected - starting ping system');
        setTimeout(() => {
            pingSystem.start();
        }, 3000);
    } else {
        console.log('🛠️ Development mode - ping system available via window.pingSystem');
    }
});

// Enhanced visibility change handling
document.addEventListener('visibilitychange', () => {
    if (import.meta.env.PROD) {
        if (document.hidden) {
            console.log('📱 Page hidden - maintaining ping system');
        } else {
            console.log('👁️ Page visible - ping system active');
            if (!pingSystem.getStats().isActive) {
                pingSystem.start();
            }
            // Re-handle hash navigation when page becomes visible
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    const target = document.querySelector(hash);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 200);
            }
        }
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (pingSystem.getStats().isActive) {
        console.log('👋 Page unloading - stopping ping system');
        pingSystem.stop();
    }
});

// Expose navigation helper for debugging
if (!import.meta.env.PROD) {
    window.navigateToSection = (sectionId) => {
        if (window.location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
        } else {
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };
}