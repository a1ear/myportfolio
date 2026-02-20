import { useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaServer, FaGlobe } from 'react-icons/fa'
import './Projects.css'

// Add more projects by pushing to backendProjects or frontendProjects arrays
const backendProjects = [
  {
    title: 'E-Commerce Backend API',
    description: 'A robust RESTful API built with PHP and MySQL for an e-commerce platform. Features include user authentication, product management, order processing, and payment integration.',
    tags: ['PHP', 'MySQL', 'REST API', 'Backend'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'Student Information System',
    description: 'Complete backend system for managing student records, grades, and academic information. Built with PHP and MySQL with secure authentication and role-based access.',
    tags: ['PHP', 'MySQL', 'Backend', 'System'],
    githubUrl: '#',
    demoUrl: '#'
  }
]

const frontendProjects = [
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing projects and skills. Built with React, clean code architecture, and optimized for performance and SEO.',
    tags: ['React', 'Frontend', 'Responsive', 'Design'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'Task Management Dashboard',
    description: 'A responsive web dashboard for task and project management. Features include drag-and-drop, real-time updates, and an intuitive UI built with modern frontend tools.',
    tags: ['JavaScript', 'Frontend', 'UI/UX', 'Dashboard'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'E-Commerce Frontend',
    description: 'Beautiful and intuitive e-commerce frontend with shopping cart, product filtering, and checkout flow. Built with modern JavaScript frameworks and responsive design principles.',
    tags: ['JavaScript', 'Frontend', 'E-Commerce', 'UI/UX'],
    githubUrl: '#',
    demoUrl: '#'
  }
]

const categoryConfig = [
  { id: 'backend', title: 'Backend', icon: <FaServer />, projects: backendProjects, color: '#2563eb' },
  { id: 'frontend', title: 'Frontend', icon: <FaGlobe />, projects: frontendProjects, color: '#059669' }
]

const Projects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in-up')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-intro">
          A collection of projects showcasing my expertise in backend development
          and frontend development. Add more entries in the Backend and Frontend
          arrays in <code>Projects.jsx</code> to show additional projects.
        </p>
        <div className="projects-content" ref={projectsRef}>
          {categoryConfig.map((category) => (
            <div key={category.id} className="project-category">
              <h3 className="category-title">
                <span className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </span>
                {category.title}
              </h3>
              <div className="projects-grid">
                {category.projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="project-header">
                      <span className="project-type" style={{ background: category.color }}>
                        {category.title}
                      </span>
                    </div>
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.githubUrl} className="project-link" title="View Code" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.demoUrl} className="project-link" title="Live Demo" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
