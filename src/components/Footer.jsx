import './Footer.css';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <span className="footer-glow-divider"></span>
          <p>Email: <a href="mailto:khalilchahi191919@gmail.com">khalilchahi191919@gmail.com</a></p>
          <p>Phone: <a href="tel:+212649595058">+212 649-595058</a></p>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
          <span className="footer-glow-divider"></span>
          <div className="social-links">
            <a href="https://github.com/kllc7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/18kllc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://youtube.com/@18kllc" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <span className="footer-glow-divider"></span>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Khalil Chahi. All rights reserved.</p>
      </div>
    </footer>
  );
} 