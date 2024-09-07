import React, { useState } from "react";
import "../styles/features.css"; // Import the CSS file for custom styling

export const FeatureItem = ({ icon, title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="feature-item">
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <div className="feature-info">
        <h3 className="feature-title">{title}</h3>
        <p className={`feature-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {text}
        </p>
        <button
          className="expand-collapse-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <i className="fa fa-chevron-up"></i>  :<i className="fa fa-chevron-down"></i>   }
        </button>
      </div>
    </div>
  );
};
