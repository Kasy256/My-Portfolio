"use client"

import { useState } from "react"
import { Globe, Server, Cloud, Terminal } from "lucide-react"
import "../styles/SkillsSection.css"

export default function SkillsSection() {
  const [category, setCategory] = useState("frontend")

  const skills = {
    frontend: [
      { name: "React", icon: "/react.png?height=60&width=60", color: "black" },
      { name: "Next.js", icon: "/nextJS.png?height=60&width=60", color: "black" },
      { name: "Tailwind CSS", icon: "/tailwind.png?height=60&width=60", color: "black" },
      { name: "HTML5", icon: "/html.png?height=60&width=60", color: "black" },
      { name: "CSS3", icon: "/css.svg?height=60&width=60", color: "black" },
      { name: "JavaScript", icon: "/javascript.png?height=60&width=60", color: "yellow" },
    ],
    backend: [
      { name: "Node.js", icon: "/node.webp?height=60&width=60", color: "black" },
      { name: "MongoDB", icon: "/mongodb.svg?height=60&width=60", color: "black" },
    ],
    devops: [
      { name: "Git", icon: "/git.png?height=60&width=60", color: "black" },
      { name: "Docker", icon: "/docker.png?height=60&width=60", color: "black" },
      { name: "Firebase", icon: "/firebase.webp?height=60&width=60", color: "black" },
      { name: "Linux", icon: "/linux.png?height=60&width=60", color: "black" },
    ],
    tools: [
      { name: "VS Code", icon: "/vscode.png?height=60&width=60", color: "black" },
      { name: "Figma", icon: "/figma.webp?height=60&width=60", color: "black" },
      { name: "Postman", icon: "/postman.webp?height=60&width=60", color: "black" },
      { name: "GitHub", icon: "/github.svg?height=60&width=60", color: "gray" },
    ],
  }

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "frontend":
        return <Globe className="category-icon" />
      case "backend":
        return <Server className="category-icon" />
      case "devops":
        return <Cloud className="category-icon" />
      case "tools":
        return <Terminal className="category-icon" />
      default:
        return null
    }
  }

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-tabs">
          <button
            className={`skills-tab ${category === "frontend" ? "active" : ""}`}
            onClick={() => setCategory("frontend")}
          >
            <Globe className="tab-icon" />
            <span className="tab-text">Frontend</span>
          </button>
          <button
            className={`skills-tab ${category === "backend" ? "active" : ""}`}
            onClick={() => setCategory("backend")}
          >
            <Server className="tab-icon" />
            <span className="tab-text">Backend</span>
          </button>
          <button
            className={`skills-tab ${category === "devops" ? "active" : ""}`}
            onClick={() => setCategory("devops")}
          >
            <Cloud className="tab-icon" />
            <span className="tab-text">DevOps</span>
          </button>
          <button className={`skills-tab ${category === "tools" ? "active" : ""}`} onClick={() => setCategory("tools")}>
            <Terminal className="tab-icon" />
            <span className="tab-text">Tools</span>
          </button>
        </div>
      </div>

      <div className="skills-card">
        <div className="skills-card-header">
          <div className="skills-card-title">
            {getCategoryIcon(category)}
            {category === "frontend" && "Frontend Development"}
            {category === "backend" && "Backend Development"}
            {category === "devops" && "DevOps & Infrastructure"}
            {category === "tools" && "Tools & Utilities"}
          </div>
        </div>
        <div className="skills-card-content">
          <div className="skills-grid">
            {skills[category].map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className={`skill-icon skill-${skill.color}`}>
                  <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="skill-image" />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

