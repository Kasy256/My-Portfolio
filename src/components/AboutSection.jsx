import { useState } from "react"
import { User, Calendar, MapPin, Briefcase, GraduationCap, Code, Heart } from "lucide-react"
import "../styles/AboutSection.css"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("bio")

  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        <div className="about-profile">
          <div className="profile-image">
            <img src="/profile.jpg?height=200&width=200" alt="Profile" />
          </div>

          <h3 className="profile-name">Jonan Kasy Agaba</h3>
          <p className="profile-role">Full Stack Developer</p>

          <div className="profile-stats">
            <div className="stat">
              <div className="stat-value">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-value">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-value">2+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </div>

        <div className="about-details">
          <div className="tabs">
            <div className="tabs-list">
              <button
                className={`tab ${activeTab === "bio" ? "active" : ""}`}
                onClick={() => setActiveTab("bio")}
                style={{ backgroundColor: activeTab === "bio" ? "var(--primary-color)" : "transparent" }}
              >
                <User className="tab-icon" />
                <span>Bio</span>
              </button>
              <button
                className={`tab ${activeTab === "experience" ? "active" : ""}`}
                onClick={() => setActiveTab("experience")}
                style={{ backgroundColor: activeTab === "experience" ? "var(--primary-color)" : "transparent" }}
              >
                <Briefcase className="tab-icon" />
                <span>Experience</span>
              </button>
              <button
                className={`tab ${activeTab === "education" ? "active" : ""}`}
                onClick={() => setActiveTab("education")}
                style={{ backgroundColor: activeTab === "education" ? "var(--primary-color)" : "transparent" }}
              >
                <GraduationCap className="tab-icon" />
                <span>Education</span>
              </button>
              <button
                className={`tab ${activeTab === "interests" ? "active" : ""}`}
                onClick={() => setActiveTab("interests")}
                style={{ backgroundColor: activeTab === "interests" ? "var(--primary-color)" : "transparent" }}
              >
                <Heart className="tab-icon" />
                <span>Interests</span>
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "bio" && (
                <div className="bio-content">
                  <p>
                  Hi there! I’m a front-end developer with a passion for building sleek, user-friendly web applications. 
                  I specialize in React and leverage AI and data analytics to create dynamic, scalable, and intuitive digital experiences.
                  </p>
                  <p>
                  With hands-on experience in web development, system testing, and IT infrastructure, I focus on crafting reliable and high-performing applications. 
                  Whether it's optimizing user interfaces or enhancing functionality, I love turning ideas into seamless web solutions.
                  </p>

                  <div className="personal-info">
                    <h4>Personal Info</h4>
                    <ul>
                      <li>
                        <Calendar className="info-icon" />
                        <span>Born in 2000</span>
                      </li>
                      <li>
                        <MapPin className="info-icon" />
                        <span>Kampala, Ug</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="experience-content">
                  <div className="timeline-item active">
                    <h4>IT Support & Portal Administrator </h4>
                    <p className="company">Uganda Investment Authority</p>
                    <p className="period">2023 - 2024</p>
                    <p className="description">
                    I conducted system testing and performance analytics for the National SME Portal, identifying areas to improve user experience. My role involved quality assurance, ensuring the functionality of mybusiness.go.ug modules, and providing customer support. Additionally, I assisted in onboarding SMEs to the platform, 
                    delivering user-centric support to enhance accessibility and usability.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <h4> FrontEnd developer</h4>
                    <p className="company">ECOS Africa LTD</p>
                    <p className="period">2023 - 2024</p>
                    <p className="description">
                    I worked on the user-facing side of the website, focusing on front-end development to enhance user experience. My role also involved customizing Content Management Systems (CMS) like WordPress and Wix to extend functionality. Additionally, I provided website maintenance by fixing bugs, updating content, 
                    and ensuring the smooth operation of the site.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <h4>System Developer</h4>
                    <p className="company">Uganda Institute of Information and Communications Technology</p>
                    <p className="period">2021 - 2022</p>
                    <p className="description">
                    Collaborated with a team to design and develop a secure and efficient electronic payroll system, 
                    creating user-friendly interfaces, robust backend functionalities, and conducting thorough testing and maintenance to ensure reliability and accuracy.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div className="education-content">
                  <div className="timeline-item active">
                    <h4>B.S. in Information Technology</h4>
                    <p className="company">ISBAT University</p>
                    <p className="period">2024 - 2025</p>
                    <p className="description">
                      Graduated with honors. Specialized in web technologies and software engineering. Participated in
                      hackathons and coding competitions.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <h4>Google Data Analytics Professional Certificate</h4>
                    <p className="company">Google, Coursera</p>
                    <p className="period">2023 - 2024</p>
                    <p className="description">
                      Completed a 6-month program covering data analysis, visualization, and SQL. Developed a capstone
                      project analyzing real-world data to derive insights and make data-driven decisions.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <h4>B.S. in Information Technology</h4>
                    <p className="company">Uganda Institute of Information and communications Technology</p>
                    <p className="period">2019 - 2022</p>
                    <p className="description">
                    Graduated with honors. Specialized in web technologies and software engineering. Participated in
                    hackathons and coding competitions.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "interests" && (
                <div className="interests-content">
                  <p>Beyond coding, I have a diverse range of interests that keep me inspired and creative:</p>

                  <ul className="interests-list">
                    <li>Open-source contribution and community involvement</li>
                    <li>UI/UX design and digital art</li>
                    <li>Photography and visual storytelling</li>
                    <li>Hiking and outdoor adventures</li>
                    <li>Reading books on technology, psychology, and science fiction</li>
                  </ul>

                  <p>
                    These interests help me maintain a balanced perspective and often inspire creative solutions to
                    technical problems.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
