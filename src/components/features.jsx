import React from "react";
import "../styles/features.css"; // Import the CSS file for custom styling

export const Features = (props) => {
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
                  <div className="feature-content">
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p> {/* Display text without hover effect */}
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
