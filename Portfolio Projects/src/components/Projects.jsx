import { useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaMobile, FaGlobe, FaPalette } from 'react-icons/fa'
import './Projects.css'

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

  const projects = [
    {
      title: 'E-Commerce Backend API',
      description: 'A robust RESTful API built with PHP and MySQL for an e-commerce platform. Features include user authentication, product management, order processing, and payment integration.',
      tags: ['PHP', 'MySQL', 'REST API', 'Backend'],
      type: 'web',
      icon: <FaGlobe />,
      color: '#2563eb'
    },
    {
      title: 'Task Management Mobile App',
      description: 'A Flutter-based mobile application for task and project management. Features include real-time synchronization, offline mode, and intuitive UI/UX design.',
      tags: ['Flutter', 'Dart', 'Mobile', 'Firebase'],
      type: 'mobile',
      icon: <FaMobile />,
      color: '#3b82f6'
    },
    {
      title: 'Student Information System',
      description: 'Complete backend system for managing student records, grades, and academic information. Built with PHP and MySQL with secure authentication and role-based access.',
      tags: ['PHP', 'MySQL', 'Backend', 'System'],
      type: 'web',
      icon: <FaGlobe />,
      color: '#2563eb'
    },
    {
      title: 'Fitness Tracker App',
      description: 'A beautiful Flutter mobile app for tracking workouts, nutrition, and fitness goals. Features include data visualization, progress tracking, and social sharing.',
      tags: ['Flutter', 'Mobile', 'UI/UX', 'Design'],
      type: 'mobile',
      icon: <FaMobile />,
      color: '#3b82f6'
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, color schemes, typography, and marketing materials. Created using Photoshop and design principles.',
      tags: ['Design', 'Photoshop', 'Branding', 'Creative'],
      type: 'design',
      icon: <FaPalette />,
      color: '#8b5cf6'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills. Built with clean code architecture and optimized for performance and SEO.',
      tags: ['Web', 'Frontend', 'Responsive', 'Design'],
      type: 'web',
      icon: <FaGlobe />,
      color: '#2563eb'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-intro">
          A collection of projects showcasing my expertise in backend development, 
          mobile applications, and creative design. Each project represents a 
          unique challenge and solution.
        </p>
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div className="project-type">{project.type}</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link" title="View Code">
                  <FaGithub />
                </a>
                <a href="#" className="project-link" title="Live Demo">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

