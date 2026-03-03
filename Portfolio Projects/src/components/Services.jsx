import { useEffect, useRef } from 'react'
import { 
  FaCode, 
  FaMobile, 
  FaPalette, 
  FaDatabase, 
  FaCamera, 
  FaVideo,
  FaServer,
  FaPaintBrush
} from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const servicesRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
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

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Robust server-side solutions using PHP and MySQL. Building scalable APIs, database architecture, and secure authentication systems.',
      features: ['RESTful APIs', 'Database Design', 'Server Architecture', 'API Integration']
    },
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using Flutter. Creating intuitive, performant apps with beautiful UI/UX design.',
      features: ['Flutter Development', 'Cross-Platform', 'UI/UX Design', 'App Optimization']
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and managing MySQL databases with optimized queries, data modeling, and efficient storage solutions.',
      features: ['Database Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning']
    },
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Creative visual solutions including logo design, branding, marketing materials, and digital graphics using Photoshop.',
      features: ['Logo Design', 'Branding', 'Digital Graphics', 'Marketing Materials']
    },
    {
      icon: <FaVideo />,
      title: 'Video Editing',
      description: 'Professional video editing services for promotional content, social media, and creative projects with attention to detail.',
      features: ['Video Production', 'Post-Production', 'Color Grading', 'Motion Graphics']
    },
    {
      icon: <FaSitemap />,
      title: 'Frontend Development',
      description: 'Front-End Developer specializing in React and Modern CSS to build elegant, responsive, and scalable digital solutions..',
      features: ['CSS', 'HTML5', 'Bootstrap', 'ReactJS']
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="services-intro">
          Comprehensive services spanning development, design, and creative solutions. 
          From backend systems to mobile apps and visual content, I deliver quality 
          results tailored to your needs.
        </p>
        <div className="services-grid" ref={servicesRef}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


