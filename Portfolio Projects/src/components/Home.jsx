import { useEffect, useRef } from 'react'
import { FaDownload, FaArrowDown } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)

  const profileImage = '/profile.jpeg'

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Anton_Magbanua_Resume.pdf'
    link.target = '_blank'
    link.click()
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="hero-content" ref={heroRef}>
          <div className="hero-text">
            <p className="greeting slide-in-left">Hello, I'm</p>
            <h1 className="hero-name">
              <span className="name-highlight">Anton Magbanua</span>
            </h1>
            <h2 className="hero-title fade-in-up">
              Backend Developer & Flutter Mobile Developer
            </h2>
            <p className="hero-description fade-in-up">
              A versatile and adaptive BSIT graduate passionate about creating
              innovative solutions through backend development, mobile applications,
              and creative design. Combining technical expertise with creative vision
              to deliver exceptional digital experiences.
            </p>
            <div className="hero-buttons fade-in-up">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <button onClick={handleResumeDownload} className="btn btn-outline">
                <FaDownload /> Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image fade-in">
            <div className="image-wrapper">
              <img
                src={profileImage}
                alt="Anton Magbanua"
                className="profile-picture"
                onLoad={(e) => {
                  const placeholder = e.target.nextElementSibling
                  if (placeholder) placeholder.classList.remove('show')
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = e.target.nextElementSibling
                  if (placeholder) placeholder.classList.add('show')
                }}
              />
              <div className="image-placeholder">
                <div className="tech-icons">
                  <div className="icon-float icon-1">PHP</div>
                  <div className="icon-float icon-2">Flutter</div>
                  <div className="icon-float icon-3">MySQL</div>
                  <div className="icon-float icon-4">API</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <FaArrowDown />
        </div>
      </div>
    </section>
  )
}

export default Home


