import React, { useState, useEffect } from "react";
import "../styles/features.css";

export const Features = (props) => {
  const featuresData = props.data || [];
  
  const images = [
    "../img/intro-bg-2.jpg",
    // "../img/intro-bg-3.jpg",
    "../img/features-image.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  // Handle image change every 5 seconds
  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(imageChangeInterval);
  }, [images.length]);

  const handleExpand = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="features-section-container">
      <div className="features-title-container">
        <h1 className="features-title">Features</h1>
      </div>
      <div className="features-section" id="features">
        <div className="features-container">
          <div className={`features-image ${expandedFeature !== null ? 'expanded' : ''}`}>
            <img
              src={images[currentImageIndex]}
              alt="Features"
              className={`features-image-slide ${expandedFeature !== null ? 'expanded' : ''}`}
            />
          </div>
          <div className="features-content">
            {featuresData.length > 0 ? (
              featuresData.map((feature, index) => (
                <div 
                  key={index} 
                  className={`feature-item ${expandedFeature === index ? 'expanded' : ''}`}
                  onClick={() => handleExpand(index)}
                >
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="feature-info">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className={`feature-text ${expandedFeature === index ? 'expanded' : ''}`}>
                      {feature.text}
                    </p>
                  </div>
                </div>
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
