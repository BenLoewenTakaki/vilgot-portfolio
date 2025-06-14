import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FilmSection from '../components/FilmSection';
import ProjectsSection from '../components/ProjectsSection';
import MusicSection from '../components/MusicSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FilmSection />
            <ProjectsSection />
            <MusicSection />
            <Footer />
        </div>
    );
};

export default Home;