import { useState, useEffect, useRef } from "react"
import { Command } from "lucide-react"
import Header from "../components/Header"
import ProfileHeader from "../components/ProfileHeader"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import CommandHistory from "../components/CommandHistory"
import "../styles/Home.css"

export default function Home({ isDarkMode, toggleDarkMode }) {
  const [prompt, setPrompt] = useState("")
  const [activeSection, setActiveSection] = useState(null)
  const [history, setHistory] = useState([])
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const lowercasePrompt = prompt.toLowerCase()
    let section = null

    if (lowercasePrompt.includes("project")) {
      section = "projects"
    } else if (lowercasePrompt.includes("skill")) {
      section = "skills"
    } else if (
      lowercasePrompt.includes("about") ||
      lowercasePrompt.includes("bio") ||
      lowercasePrompt.includes("who")
    ) {
      section = "about"
    } else if (
      lowercasePrompt.includes("contact") ||
      lowercasePrompt.includes("email") ||
      lowercasePrompt.includes("reach")
    ) {
      section = "contact"
    } else if (lowercasePrompt.includes("clear") || lowercasePrompt.includes("reset")) {
      setActiveSection(null)
      setPrompt("")
      return
    } else if (lowercasePrompt.includes("help")) {
      section = "help"
    } else if (lowercasePrompt.includes("home") || lowercasePrompt.includes("profile")) {
      section = "profile"
    }

    if (section) {
      setActiveSection(section)
      setHistory((prev) => [...prev, { command: prompt, section }])
    }

    setPrompt("")
  }

  useEffect(() => {
    // Focus the input on initial load
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="main-content">
        <div className="content-wrapper">
          {!activeSection && <ProfileHeader />}

          <div className="command-container">
            <div className="command-header">
              <Command className="command-icon" />
              <h2 className="command-title">My Portfolio CLI</h2>
            </div>

            <div className="command-card">
              <form onSubmit={handleSubmit} className="command-form">
                <div className="command-prompt">$</div>
                <input
                  ref={inputRef}
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type 'show me your projects' or 'what skills do you have?'..."
                  className="command-input"
                />
                <button type="submit" className="command-button">
                  Enter
                </button>
              </form>
            </div>
          </div>

          {!activeSection && history.length === 0 && !activeSection && (
            <div className="empty-state">
              <p className="empty-state-text">Type something to get started...</p>
              <p className="empty-state-subtext">Try "Show me your projects" or "What skills do you have?"</p>
            </div>
          )}

          {history.length > 0 && !activeSection && (
            <CommandHistory history={history} setActiveSection={setActiveSection} />
          )}

          {activeSection === "projects" && <ProjectsSection />}
          {activeSection === "skills" && <SkillsSection />}
          {activeSection === "about" && <AboutSection />}
          {activeSection === "contact" && <ContactSection />}
          {activeSection === "profile" && <ProfileHeader />}
          {activeSection === "help" && (
            <div className="help-section">
              <h2 className="help-title">Available Commands:</h2>
              <ul className="help-commands">
                <li>
                  <span className="command-keyword">projects</span> - View my portfolio projects
                </li>
                <li>
                  <span className="command-keyword">skills</span> - See my technical skills
                </li>
                <li>
                  <span className="command-keyword">about</span> - Learn about me
                </li>
                <li>
                  <span className="command-keyword">contact</span> - Get my contact information
                </li>
                <li>
                  <span className="command-keyword">profile</span> - View my profile
                </li>
                <li>
                  <span className="command-keyword">clear</span> - Clear the current view
                </li>
                <li>
                  <span className="command-keyword">help</span> - Show this help message
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

