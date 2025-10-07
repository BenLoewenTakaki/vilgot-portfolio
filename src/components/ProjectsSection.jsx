import React from 'react';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Project',
        },
        {
            title: 'Project',
        },
        {
            title: 'Project',
        }
    ];

    return (
        <section id="projects" className="project-section">
            <div className="container">
                <h2 className="projects-main-title">Projects</h2>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-placeholder"></div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;