import React from 'react'
import { projectsHeading, projectsDescription } from '../constants/siteData'
import { projects } from '../constants/projectsData'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">{projectsHeading}</h2>
        <p className="section-description">{projectsDescription}</p>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-tech">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

