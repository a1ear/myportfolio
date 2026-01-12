import { useEffect, useRef } from 'react'
import { 
  FaPhp, 
  FaDatabase, 
  FaMobile, 
  FaCode, 
  FaPalette, 
  FaCamera,
  FaVideo,
  FaServer
} from 'react-icons/fa'
import { SiFlutter, SiMysql, SiPostman } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill')
            skillBars.forEach((bar) => {
              const width = bar.getAttribute('data-width')
              setTimeout(() => {
                bar.style.width = width + '%'
              }, 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <FaServer />,
      skills: [
        { name: 'PHP', level: 90, icon: <FaPhp /> },
        { name: 'MySQL', level: 85, icon: <FaDatabase /> },
        { name: 'REST APIs', level: 88, icon: <FaCode /> },
        { name: 'Postman', level: 80, icon: <SiPostman /> }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <FaMobile />,
      skills: [
        { name: 'Flutter', level: 85, icon: <SiFlutter /> },
        { name: 'Dart', level: 80, icon: <FaCode /> },
        { name: 'Mobile UI/UX', level: 82, icon: <FaPalette /> }
      ]
    },
    {
      title: 'Creative Skills',
      icon: <FaPalette />,
      skills: [
        { name: 'Graphic Design', level: 85, icon: <FaPalette /> },
        { name: 'Photoshop', level: 88, icon: <FaPalette /> },
        { name: 'Video Editing', level: 80, icon: <FaVideo /> },
        { name: 'Photography', level: 82, icon: <FaCamera /> }
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-content" ref={skillsRef}>
          <p className="skills-intro">
            A comprehensive skill set spanning backend development, mobile applications, 
            and creative design. Continuously learning and adapting to new technologies 
            and methodologies.
          </p>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill" 
                          data-width={skill.level}
                          style={{ width: '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

