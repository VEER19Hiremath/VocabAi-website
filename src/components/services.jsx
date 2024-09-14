import React from "react";
import '../styles/services.css'; // Ensure the path to your CSS file is correct

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="main-container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Services by Vocab.AI</p>
        </div>
        <div className="service-container">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="service-card">
                  <img src={d.image} alt={d.name} className="service-image" /> {/* Replace icon with image */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
