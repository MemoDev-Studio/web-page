import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>

            <div className="project-card">
                <h3>BaristApp</h3>
                <p>
                    A digital platform to help small cafés and restaurants manage orders, inventory, and staff easily and affordably.
                    Designed for non-technical users, BaristApp simplifies operations with an intuitive interface and accessible pricing.
                </p>
                <a 
                    href="/BaristApp_PitchDeck.pdf" 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Pitch Deck
                </a>
            </div>
        </section>
    );
};

export default Projects;
