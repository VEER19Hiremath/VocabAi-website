import React from "react";
import '../styles/team-image.css'; // Import the CSS file for custom styling

export const Team = (props) => {
  const centerImage = props.data ? props.data[0] : null;
  const surroundingImages = props.data ? props.data.slice(1) : [];

  // Define positions for surrounding images, ensuring no overlap
  const gridPositions = [
    { top: '5%', left: '10%' },
    { top: '5%', right: '10%' },
    { bottom: '5%', left: '10%' },
    { bottom: '5%', right: '10%' },
    { top: '40%', left: '5%' },
    { top: '40%', right: '5%' },
    { top: '15%', left: '60%' },
    { bottom: '15%', left: '60%' },
  ];

  // Define different sizes for surrounding images
  const imageSizes = [
    { width: '140px', height: '180px' },
    { width: '160px', height: '200px' },
    { width: '150px', height: '190px' },
    { width: '170px', height: '210px' },
    { width: '130px', height: '170px' },
    { width: '180px', height: '220px' },
    { width: '120px', height: '160px' },
    { width: '190px', height: '230px' },
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
          {surroundingImages.length > 0
            ? surroundingImages.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="thumbnail surrounding-thumbnail"
                  style={{
                    ...gridPositions[i % gridPositions.length],
                    ...imageSizes[i % imageSizes.length],
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
