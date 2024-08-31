import React from "react";
import '../styles/team-image.css'; // Import the CSS file for custom styling

export const Team = (props) => {
  const images = props.data ? props.data : [];

  // Separate the center image, surrounding images, and edge images
  const centerImage = images.length > 0 ? images[0] : null;
  const surroundingImages = images.length > 5 ? images.slice(1, -4) : [];
  const edgeImages = images.length > 5 ? images.slice(-4) : [];

  // Define different sizes for surrounding and edge images
  const surroundingSizes = [
    { width: '100px', height: '150px' },
    { width: '120px', height: '135px' },
    { width: '140px', height: '205px' },
    { width: '110px', height: '140px' },
    { width: '130px', height: '90px' },
    { width: '150px', height: '220px' },
    { width: '120px', height: '120px' },
    { width: '160px', height: '210px' },
  ];

  const edgeSizes = [
    { width: '150px', height: '180px' },
    { width: '160px', height: '200px' },
    { width: '130px', height: '160px' },
    { width: '140px', height: '170px' },
  ];

  // Calculate positions in a circular pattern around the center
  const calculatePosition = (index, totalImages) => {
    const angle = (index / totalImages) * 2 * Math.PI; // Calculate angle for each image
    const radius = 300; // Distance from the center of the container
    const x = Math.cos(angle) * radius; // X position
    const y = Math.sin(angle) * radius; // Y position
    return { transform: `translate(${x}px, ${y}px)` }; // Translate based on x and y
  };

  // Calculate positions for edge images
  const edgePositions = [
    { top: '300px', left: '90%', transform: 'translateX(-50%)' }, // Top edge
    { bottom: '-1px', left: '12%', transform: 'translateX(-50%)' }, // Bottom edge
    { left: '50px', top: '30%', transform: 'translateY(-50%)' }, // Left edge
    { right: '30px', top: '80%', transform: 'translateY(-50%)' }, // Right edge
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div className="team-container">
          {centerImage && (
            <div className="thumbnail center-thumbnail">
              <img src={centerImage.img} alt={centerImage.name} className="team-img center-img" />
              <div className="team-caption">
                <h4 className="team-name">{centerImage.name}</h4>
                <p className="team-job">{centerImage.job}</p>
              </div>
            </div>
          )}
          {surroundingImages.length > 0
            ? surroundingImages.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="thumbnail surrounding-thumbnail"
                  style={{
                    ...calculatePosition(i, surroundingImages.length),
                    ...surroundingSizes[i % surroundingSizes.length],
                  }}
                >
                  <img src={d.img} alt={d.name} className="team-img" />
                  <div className="team-caption">
                    <h4 className="team-name">{d.name}</h4>
                    <p className="team-job">{d.job}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
          {edgeImages.length > 0
            ? edgeImages.map((d, i) => (
                <div
                  key={`edge-${i}`}
                  className="thumbnail edge-thumbnail"
                  style={{
                    ...edgePositions[i],
                    ...edgeSizes[i % edgeSizes.length],
                  }}
                >
                  <img src={d.img} alt={d.name} className="team-img" />
                  <div className="team-caption">
                    <h4 className="team-name">{d.name}</h4>
                    <p className="team-job">{d.job}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
