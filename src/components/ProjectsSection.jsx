import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import "../styles/ProjectsSection.css"

const projects = [
  {
    id: 1,
    title: "PSec AI",
    description: "An AI-powered report generation tool that analyzes users' previously written reports to generate new reports in the same structure, style, and format. Ensures consistency and personalization by adapting to user-specific formatting instead of applying generic templates.",
    image: "/psec.png?height=300&width=400",
    tags: ["React", "Node.js", "OpenAI", "PostgreSQL","Firebase", "Pinecone"],
    demoUrl: "https://psec-ai.firebaseapp.com/",
    githubUrl: "https://github.com/PhilipHinny/PSec.io.git",
    category: "web",
  },
  {
    id: 2,
    title: "FLiiTS",
    description: "A car-sharing platform that connects users with rental cars. Uses AI-driven search, booking, and bargaining features to match users with the best available vehicles while enabling smart price negotiations between renters and car owners.",
    image: "/fliits.png?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB","Firebase", "Next.js"],
    demoUrl: "https://fliits.firebaseapp.com/",
    githubUrl: "https://github.com/Kasy256/FLIITS_APP_V1",
    category: "web",
  },
  {
    id: 3,
    title: "FLiiTS",
    description: "A car-sharing app that connects users with rental cars. Uses AI-driven search, booking, and bargaining features to match users with the best available vehicles while enabling smart price negotiations between renters and car owners.",
    image: "/fliits.png?height=200&width=400",
    tags: ["React Native", "Node.js", "MongoDB","Firebase", "Next.js"],
    demoUrl: "https://fliits.firebaseapp.com/",
    githubUrl: "https://github.com/Kasy256/FLIITS_APP_V1",
    category: "mobile",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    image: "/data.jpg?height=200&width=400",
    tags: ["Tableau", "Google Sheets", "SQL", "R", "BigQuery"],
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/yourusername/project4",
    category: "data",
  },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-filter">
          <button className={`filter-button ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All
          </button>
          <button className={`filter-button ${filter === "web" ? "active" : ""}`} onClick={() => setFilter("web")}>
            Web
          </button>
          <button
            className={`filter-button ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </button>
          <button className={`filter-button ${filter === "data" ? "active" : ""}`} onClick={() => setFilter("data")}>
            Data
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                <Github className="project-link-icon" />
                <span>Code</span>
              </a>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo">
                <ExternalLink className="project-link-icon" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

