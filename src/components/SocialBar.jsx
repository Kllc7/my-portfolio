import { FaSpotify, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './SocialBar.css';

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a href="https://open.spotify.com/user/h8b2bp1wksvrdojqhfq59783n?si=312a2b8330b44d28" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><FaSpotify /></a>
      <a href="https://github.com/kllc7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://linkedin.com/in/18kllc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://youtube.com/@18kllc" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
    </div>
  );
} 