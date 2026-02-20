import { useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaServer, FaGlobe } from 'react-icons/fa'
import './Projects.css'

// Add more projects by pushing to backendProjects or frontendProjects arrays
const backendProjects = [
  {
    title: 'Gym Sync',
    description: 'A robust RESTful API built with PHP and MySQL, My Capstone Project. Features include user authentication, member management, coach management, and user to coach interaction via mobile app.',
    tags: ['PHP', 'MySQL', 'REST API', 'Backend','Dart'],
    githubUrl: '#',
    demoUrl: 'https://antm.helioho.st/GymSync/login.php'
  },
  {
    title: 'Tata-Joy Rice Trading',
    description: 'A PHP-based gym inventory management system with a logistics dashboard, featuring real-time stock tracking, low stock alerts, and full CRUD operations for managing gym equipment and supplies.',
    tags: ['PHP', 'Bootstrap 5', 'MYSQL','HelioHost','Vanilla JS','CRUD'],
    githubUrl: '#',
    demoUrl: 'https://antm.helioho.st/backend-dev/simple_inventory/login.php'
  }
]

const frontendProjects = [
  {
    title: 'Tata-Joy Rice Trading',
    description: 'The website features a clean, modern design with natural tones by colors schemes requested by the company, creating a professional and trustworthy feel.',
    tags: ['CSS', 'Frontend', 'Responsive', 'Design'],
    githubUrl: '#',
    demoUrl: 'https://antm.helioho.st/frontend-dev/TataJoyWebsite/index.php'
  },
  {
    title: 'Photography Portfolio Website',
    description: 'A photo portfolio website, It features a compiled collection of my Photos taken from my phone. It has a modern, responsive design using PHP for structure and CSS for styling .',
    tags: ['Images', 'Frontend', 'UI/UX', 'Dashboard'],
    githubUrl: '#',
    demoUrl: 'https://antm.helioho.st/frontend-dev/photowebsite/index.php'
  },
  {
    title: 'Iphone 17 Pro Max Showcase',
    description: 'A modern Bootstrap 5 product showcase website designed to highlight the iPhone 17 Pro Max with a premium, Apple-inspired layout and fully responsive design. The project demonstrates advanced use of the Bootstrap grid system, utility classes, and structured component sections.',
    tags: ['Bootstrap 5', 'Responsive Design', 'UI/UX Design', 'Front-End Development'],
    githubUrl: '#',
    demoUrl: 'https://antm.helioho.st/frontend-dev/Bootstrap%20Showcase/index.html'
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
          and frontend development.
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




