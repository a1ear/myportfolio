import { useEffect, useRef } from 'react'
import { FaGraduationCap, FaCode, FaPalette, FaTrophy } from 'react-icons/fa'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: 'BSIT4A Student',
      description: 'Pursuing excellence in Information Technology with consistent academic achievement'
    },
    {
      icon: <FaCode />,
      title: 'Full-Stack Developer',
      description: 'Specialized in backend development with PHP, MySQL, and API integration'
    },
    {
      icon: <FaPalette />,
      title: 'Creative Professional',
      description: 'Skilled in graphic design, video editing, and photography'
    },
    {
      icon: <FaTrophy />,
      title: 'Team Leader',
      description: 'Proven track record of leading teams and delivering successful projects'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <div className="about-intro">
              <h3>Versatile & Adaptive Developer</h3>
              <p>
                I'm Anton Magbanua, a passionate BSIT4A student who thrives at the intersection 
                of technology and creativity. With a strong foundation in backend development and 
                mobile app creation, I bring a unique blend of technical expertise and creative 
                vision to every project.
              </p>
              <p>
                My journey in technology has been marked by continuous learning and adaptation. 
                Whether I'm building robust APIs, developing Flutter mobile applications, or 
                crafting visually stunning designs, I approach each challenge with enthusiasm 
                and a commitment to excellence.
              </p>
              <p>
                Beyond coding, I'm deeply passionate about graphic design, photography, and video 
                editing. These creative pursuits not only fuel my artistic side but also enhance 
                my ability to create user-centric, visually appealing digital experiences.
              </p>
            </div>
            
            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

