import './About.css';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack'] },
  ];
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-content">
          <h1>About Me</h1>
          <span className="glow-divider"></span>
          <p className="bio">
            I'm a passionate full-stack developer with a strong foundation in web technologies and a keen eye for creating intuitive user experiences. With several years of experience, I've worked on various projects ranging from small business websites to complex web applications.
          </p>
        </div>
      </section>
      <section className="about-highlights glass">
        <h2>Highlights</h2>
        <ul className="highlights-list">
          <li>🎬 Multimedia & 3D Design: FL Studio, Ableton Live, Premiere Pro, After Effects, Unity 3D</li>
          <li>💻 Full Stack Web Dev: JavaScript, React, Node.js, Python, MySQL, MongoDB</li>
          <li>🛒 E-commerce & Social Media: Instagram, Facebook, Shopify</li>
          <li>🌍 Languages: Fluent in English, French, Arabic</li>
          <li>🏆 Strong customer focus, creativity, and problem-solving</li>
        </ul>
      </section>
      <section className="skills-section">
        <h2>Skills & Expertise</h2>
        <span className="glow-divider"></span>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div key={i} className="skill-category">
              <h3>{group.category}</h3>
              <div className="skill-items">
                {group.items.map((skill, j) => (
                  <span key={j} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="experience-section">
        <h2>Experience</h2>
        <span className="glow-divider"></span>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Senior Developer</h3>
              <p className="company">KLLC</p>
              <p className="duration">2020 - Present</p>
              <ul>
                <li>Led development of key features for enterprise applications</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines and improved deployment processes</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <p className="company">Previous Company</p>
              <p className="duration">2018 - 2020</p>
              <ul>
                <li>Developed and maintained multiple web applications</li>
                <li>Collaborated with design team to implement UI/UX improvements</li>
                <li>Optimized application performance and reduced load times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 