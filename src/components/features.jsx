import React from "react";
import "../styles/features.css"; // Import the CSS file for custom styling
import { FeatureItem } from "./feature_item"; // Corrected import

export const Features = (props) => {
  // Default to empty array if props.data is undefined
  const featuresData = props.data || [];

  return (
    <div>
      <div className="features-title-container">
        <h1 className="features-title">Features</h1>
      </div>
      <div className="features-section" id="features">
        <div className="features-container">
          <div className="features-image">
            <img src="../img/features-image.jpg" alt="Features" />
          </div>
          <div className="features-content">
            {featuresData.length > 0 ? (
              featuresData.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  text={feature.text}
                />
              ))
            ) : (
              <p>No features available.</p> // Handling case when there is no data
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
