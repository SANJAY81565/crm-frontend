import React from 'react'
import "./messageHistory.style.css"

export const MessageHistory = ({msg}) => {
    if (!msg) return null;

    return msg.map((row, i) => (
     <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">dewqfc</div>
        <div className="date">
          fewfw
        </div>
      </div>
      <div className="message">dqwfd</div>
    </div>
  ))
}
