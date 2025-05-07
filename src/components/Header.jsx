import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import m from '../assets/m.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  // Toggle theme
  function toggleTheme() {
    setLightMode(l => {
      const newMode = !l;
      document.documentElement.classList.toggle('light', newMode);
      return newMode;
    });
  }

  return (
    <header className="header">
      <div className="header-content">
      <NavLink to="/">
  <img src={m} alt="Portfolio Logo" className="logo" />
</NavLink>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(m => !m)}>
          <span className={`hamburger${menuOpen ? ' open' : ''}`}></span>
        </button>
        <nav className={`nav-menu${menuOpen ? ' active' : ''}`}> 
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
        </nav>
        <button className="theme-toggle-btn" aria-label="Toggle light/dark mode" onClick={toggleTheme}>
          {lightMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
} 