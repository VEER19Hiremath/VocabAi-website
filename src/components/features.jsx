import React, { useState, useEffect } from "react";
import "../styles/features.css"; // Import the CSS file for custom styling
import { FeatureItem } from "./feature_item"; // Corrected import

export const Features = (props) => {
  const featuresData = props.data || [];
  
  const images = [
    "../img/intro-bg-2.jpg",
    "../img/intro-bg-3.jpg",
    "../img/features-image.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image change every 5 seconds
  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(imageChangeInterval);
  }, [images.length]);

  return (
    <div>
      <div className="features-title-container">
        <h1 className="features-title">Features</h1>
      </div>
      <div className="features-section" id="features">
        <div className="features-container">
          <div className="features-image">
            <img
              src={images[currentImageIndex]}
              alt="Features"
              className="features-image-slide"
            />
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
              <p>No features available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
