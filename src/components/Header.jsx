import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import "../styles/Header.css"

export default function Header({ isDarkMode, toggleDarkMode }) {
  const navigateHome = () => {
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-accent" onClick={navigateHome}>My</span>Portfolio
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Kasy256"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <Github className="social-icon" />
        </a>
        <a
          href="https://linkedin.com/in/jonan-agaba256"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <Linkedin className="social-icon" />
        </a>
        <a href="mailto:jonanrayan06@gmail.com" className="social-link" aria-label="Email">
          <Mail className="social-icon" />
        </a>
        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="social-icon" /> : <Moon className="social-icon" />}
        </button>
      </div>
    </header>
  )
}

