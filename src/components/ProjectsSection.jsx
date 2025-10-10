import React, { useState } from 'react';

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'TreeTides',
            type: 'pdf',
            file: '/TreeTides.pdf',
            description: 'I challenged myself to write and design a magazine. This was so I can refine my writing skills, get better at using Adobe Photoshop and learn how to use Adobe InDesign. I wrote most article by myself and designed the whole thing by myself using Photoshop and InDesign.'
        },
        {
            title: 'Project',
            type: 'placeholder',
        },
        {
            title: 'Project',
            type: 'placeholder',
        }
    ];

    const handleProjectClick = (project) => {
        if (project.type === 'pdf') {
            setSelectedProject(project);
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="projects" className="project-section">
                <div className="container">
                    <h2 className="projects-main-title">Projects</h2>
                    
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className={`project-card ${project.type === 'pdf' ? 'project-clickable' : ''}`}
                                onClick={() => handleProjectClick(project)}
                            >
                                <div className="project-placeholder">
                                    {project.type === 'pdf' && (
                                        <div className="pdf-icon">
                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor" opacity="0.3"/>
                                                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    {project.description && (
                                        <p className="project-description">{project.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Modal */}
            {selectedProject && (
                <div className="pdf-modal-overlay" onClick={closeModal}>
                    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="pdf-modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <h2 className="pdf-modal-title">{selectedProject.title}</h2>
                        <div className="pdf-viewer-container">
                            <iframe
                                src={selectedProject.file}
                                title={selectedProject.title}
                                className="pdf-viewer"
                            />
                        </div>
                        <a 
                            href={selectedProject.file} 
                            download 
                            className="pdf-download-btn"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsSection;