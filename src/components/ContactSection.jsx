"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import "../styles/ContactSection.css"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/jonanrayan06@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        // Handle error
        setIsSubmitting(false)
        alert("Failed to send message. Please try again later.")
      }
        } catch (error) {
      // Handle error
      setIsSubmitting(false)
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-content">
        <div className="contact-form-container">
          <h3 className="contact-subtitle">Get In Touch</h3>
          <p className="contact-description">Fill out the form and I'll get back to you as soon as possible.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSubmitted && (
              <div className="form-success">Thank you for your message! I'll respond as soon as possible.</div>
            )}
          </form>
        </div>

        <div className="contact-info-container">
          <h3 className="contact-subtitle">Contact Information</h3>
          <p className="contact-description">Here's how you can reach me directly.</p>

          <div className="contact-info">
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:jonanrayan06@gmail.com" className="info-value">
                  jonanrayan06@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <p className="info-label">Phone</p>
                <a href="tel:+11234567890" className="info-value">
                  +256 (070) 436-1827
                </a>
              </div>
            </div>

            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <p className="info-label">Location</p>
                <p className="info-text">Kampala, Uganda</p>
              </div>
            </div>
          </div>

          <div className="social-media">
            <p className="social-title">Social Media</p>
            <div className="social-icons">
              <a
                href="https://github.com/Kasy256"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <Github className="social-icon" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/jonan-agaba256"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <Linkedin className="social-icon" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <Twitter className="social-icon" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <p className="availability">Available for freelance work and full-time positions.</p>
        </div>
      </div>
    </div>
  )
}

