"use client"

import { ScrollText } from "lucide-react"
import "../styles/CommandHistory.css"

export default function CommandHistory({ history, setActiveSection }) {
  return (
    <div className="history-container">
      <div className="history-header">
        <ScrollText className="history-icon" />
        <h2 className="history-title">Command History</h2>
      </div>

      <div className="history-list">
        {history.map((item, index) => (
          <div key={index} className="history-item" onClick={() => setActiveSection(item.section)}>
            <div className="history-command">
              <span className="history-prompt">$</span>
              <span>{item.command}</span>
            </div>
            <div className="history-info">
              Displayed: <span className="history-section">{item.section}</span> section
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

