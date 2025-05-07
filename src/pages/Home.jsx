import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import { useEffect, useState } from 'react';
import { FaMusic, FaCode, FaGamepad, FaStore, FaGlobe, FaLanguage, FaSpotify } from 'react-icons/fa';

import placeholderImg from '../assets/placeholder.jpg';

// Custom hook for YouTube stats
function useYouTubeStats(channelId, apiKey) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    if (!channelId || !apiKey) return;
    async function fetchStats() {
      try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCnWkLySxRv_D_mcGzlloTNg&key=AIzaSyDY_BoSAhzduex--UGBv8phXJeNEuX8D9Q`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setStats(data.items[0].statistics);
        }
      } catch (e) {
        setStats(null);
      }
    }
    fetchStats();
  }, [channelId, apiKey]);
  return stats;
}

const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export default function Home() {
  const stats = useYouTubeStats(YOUTUBE_CHANNEL_ID, YOUTUBE_API_KEY);
  const featuredProjects = [
    {
      title: 'Matrix Balancer',
      description: 'A tool for balancing matrices using Streamlit and Python.',
      image: placeholderImg,
      technologies: ['Streamlit', 'Python', 'Numpy', 'Pandas', 'Matplotlib', 'Openpyxl'],
      liveLink: 'https://matrixbalancer.streamlit.app',
      githubLink: 'https://github.com/kllc7/ras_matrix_balancer',
    },
    {
      title: 'Datai',
      description: 'A modern web app built with React and Firebase.',
      image: placeholderImg,
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://project2.com',
      githubLink: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            Multimedia Creator, Web Developer & <span className="highlight">Music Enthusiast</span>
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          >
            I blend code, sound, and design to build digital experiences.<br />
            Let&apos;s create something amazing together.
          </motion.p>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          >
            <Link to="/projects" className="cta-button primary">View My Work</Link>
            <Link to="/about" className="cta-button secondary">About Me</Link>
          </motion.div>
        </motion.div>
      </section>
      <section className="quick-facts-section glass">
        <h2>Quick Facts</h2>
        <div className="quick-facts-grid">
          <div className="fact-card"><FaMusic /> Multimedia Production</div>
          <div className="fact-card"><FaCode /> Full Stack Web Dev</div>
          <div className="fact-card"><FaGamepad /> 3D/Game Development</div>
          <div className="fact-card"><FaStore /> E-commerce & Social Media</div>
          <div className="fact-card"><FaLanguage /> Languages: EN, FR, AR</div>
        </div>
      </section>
      <section className="spotify-section glass">
        <h2><FaSpotify /> My Spotify</h2>
        <p>Music is my passion. I create, curate, and share tracks that inspire me. Check out my Spotify for my latest playlists and favorites.</p>
        <div className="spotify-embed-wrapper">
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/5jv9wD9oK9tbiagz1wPxOQ?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify Profile"></iframe>
        </div>
      </section>
      <section className="featured-projects">
        <div className="featured-projects-bg">
          <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <ellipse cx="450" cy="300" rx="340" ry="180" fill="url(#grad1)" />
            <ellipse cx="600" cy="400" rx="120" ry="60" fill="#2563eb" fillOpacity="0.18" />
            <ellipse cx="300" cy="200" rx="90" ry="40" fill="#1e40af" fillOpacity="0.13" />
          </svg>
        </div>
        <h2>Featured Projects</h2>
        <span className="glow-divider"></span>
        <div className="projects-grid">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
        <div className="view-all">
          <Link to="/projects" className="view-all-link">View All Projects →</Link>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="youtube-section">
        <h2>
          <span role="img" aria-label="clapperboard">🎬</span> My YouTube Journey
        </h2>
        <p>
          I love music and video editing! Here's a taste of my creative side—combining visuals, sound, and storytelling. Check out my channel for more.
        </p>
        <div className="youtube-content" style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: 2, minWidth: 320 }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/oE89s7ZKuS4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "1.2rem", boxShadow: "0 0 24px #2563eb55" }}
            ></iframe>
            <a
              href="https://www.youtube.com/channel/UCnWkLySxRv_D_mcGzlloTNg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                margin: "1.2rem auto 0 auto",
                maxWidth: 220,
                background: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "999px",
                padding: "0.7rem 2rem",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "1.1rem",
                boxShadow: "0 2px 16px #2563eb55",
                transition: "background 0.2s"
              }}
            >
              Visit My Channel
            </a>
          </div>
          <div style={{ flex: 1, minWidth: 200, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div className="yt-stat-card">
              <div className="yt-stat-value">{stats ? Number(stats.viewCount).toLocaleString() : "..."}</div>
              <div className="yt-stat-label">Total Views</div>
            </div>
            <div className="yt-stat-card">
              <div className="yt-stat-value">{stats ? Number(stats.videoCount).toLocaleString() : "..."}</div>
              <div className="yt-stat-label">Videos</div>
            </div>
            <div className="yt-stat-card">
              <div className="yt-stat-value">{stats ? Number(stats.subscriberCount).toLocaleString() : "..."}</div>
              <div className="yt-stat-label">Subscribers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 