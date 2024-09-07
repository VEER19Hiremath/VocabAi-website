import React, { useState } from "react";
import "../styles/features.css"; // Import the CSS file for custom styling

export const Features = (props) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-sm-6 col-md-4 feature-box"
                >
                  <div
                    className={`feature-content ${expandedIndex === i ? 'expanded' : ''}`}
                  >
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p> {/* Display text */}
                    <div
                      className="toggle-btn"
                      onClick={() => handleToggleClick(i)}
                    >
                      {expandedIndex === i ? (
                        <i className="fa fa-chevron-up"></i> // Up arrow icon
                      ) : (
                        <i className="fa fa-chevron-down"></i> // Down arrow icon
                      )}
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
