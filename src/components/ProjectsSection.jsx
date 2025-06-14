import React from 'react';
import { MagazineIcon, PhotographyIcon } from './CustomSVGs';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Creative Magazine',
            description: 'A collaborative magazine project showcasing various articles, photography, and creative writing from fellow students and artists.',
            link: 'https://example.com/magazine',
            icon: <MagazineIcon size={40} color="var(--primary-yellow)" />
        },
        {
            title: 'Photography Series',
            description: 'Behind-the-scenes photography and visual documentation of film production processes and creative journeys.',
            link: '#',
            icon: <PhotographyIcon size={40} color="var(--primary-yellow)" />
        }
    ];

    return (
        <section id="projects" className="project-section">
            <div className="container">
                <div className="section-header">
                    <h2>Creative Projects</h2>
                    <p className="section-subtitle">
                        Beyond filmmaking: exploring various creative mediums and collaborative works
                    </p>
                </div>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--gradient-3)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {project.icon}
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;