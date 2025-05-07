import { motion } from 'framer-motion';
import './ProjectCard.css';

export default function ProjectCard({ title, description, image, technologies, liveLink, githubLink }) {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #2563eb44' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>}
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>}
        </div>
      </div>
    </motion.div>
  );
} 