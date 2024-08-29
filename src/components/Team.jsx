import React from "react";
import '../styles/team-image.css'; // Import the CSS file for custom styling

export const Team = (props) => {
  // Pick the first image as the center image, and the rest as surrounding images
  const centerImage = props.data ? props.data[0] : null;
  const surroundingImages = props.data ? props.data.slice(1) : [];

  // Define grid positions for surrounding images
  const gridPositions = [
    { top: '10%', left: '15%' },
    { top: '10%', right: '15%' },
    { bottom: '10%', left: '15%' },
    { bottom: '10%', right: '15%' },
    { top: '50%', left: '5%' },
    { top: '50%', right: '5%' },
    { top: '30%', left: '50%' },
    { bottom: '30%', left: '50%' }
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div className="team-container">
          {centerImage && (
            <div key={centerImage.name} className="thumbnail center-thumbnail">
              <img src={centerImage.img} alt={centerImage.name} className="team-img center-img" />
              <div className="team-caption">
                <h4 className="team-name">{centerImage.name}</h4>
                <p className="team-job">{centerImage.job}</p>
              </div>
            </div>
          )}
          {surroundingImages.length > 0 ? surroundingImages.map((d, i) => (
            <div
              key={`${d.name}-${i}`}
              className="thumbnail surrounding-thumbnail"
              style={gridPositions[i % gridPositions.length]}
            >
              <img src={d.img} alt={d.name} className="team-img" />
              <div className="team-caption">
                <h4 className="team-name">{d.name}</h4>
                <p className="team-job">{d.job}</p>
              </div>
            </div>
          )) : "loading"}
        </div>
      </div>
    </div>
  );
};
