import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import placeholderImg from '../assets/placeholder.jpg';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const projects = [
    {
      title: 'Matrix Balancer',
      description: 'A full-stack web application for matrix balancing.',
      image: placeholderImg,
      technologies: ['Streamlit', 'Python', 'Numpy', 'Pandas', 'Matplotlib', 'Openpyxl'],
      liveLink: 'https://matrix-balancer.streamlit.app',
      githubLink: 'https://github.com/kllc7/ras_matrix_balancer',
      category: 'fullstack',
    },
    {
      title: 'Blender Addon: blend normals',
      description: '',
      image: placeholderImg,
      technologies: ['python', 'blender'],
      liveLink: 'https://project2.com',
      githubLink: 'https://github.com/yourusername/project2',
      category: 'frontend',
    },
    {
      title: 'Project 3',
      description: 'A RESTful API service for user management.',
      image: placeholderImg,
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      liveLink: 'https://project3.com',
      githubLink: 'https://github.com/yourusername/project3',
      category: 'backend',
    },
  ];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p className="subtitle">A collection of my recent work and personal projects</p>
      </section>
      <section className="projects-content">
        <div className="filter-buttons">
          <button className={`filter-button${filter === 'all' ? ' active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-button${filter === 'frontend' ? ' active' : ''}`} onClick={() => setFilter('frontend')}>Frontend</button>
          <button className={`filter-button${filter === 'backend' ? ' active' : ''}`} onClick={() => setFilter('backend')}>Backend</button>
          <button className={`filter-button${filter === 'fullstack' ? ' active' : ''}`} onClick={() => setFilter('fullstack')}>Full Stack</button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
} 