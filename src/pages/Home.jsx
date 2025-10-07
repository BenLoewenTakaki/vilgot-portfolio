import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ReelSection from '../components/ReelSection';
import ProjectsSection from '../components/ProjectsSection';
import FilmSection from '../components/FilmSection';
import MusicSection from '../components/MusicSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ReelSection />
            <ProjectsSection />
            <FilmSection />
            <MusicSection />
            <Footer />
        </div>
    );
};

export default Home;