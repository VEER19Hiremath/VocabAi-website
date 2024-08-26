import React, { useState, useEffect } from "react";
import '../styles/features.css'; // Import the CSS file for custom styling

export const Features = (props) => {
  const [hoverIndex, setHoverIndex] = useState(null); // Track the index of the hovered card
  const [displayedText, setDisplayedText] = useState(''); // Track the text being displayed

  useEffect(() => {
    let timer;
    if (hoverIndex !== null) {
      const fullText = props.data[hoverIndex].text;
      let charIndex = 0;
      setDisplayedText(''); // Clear the text before starting the typing effect
      timer = setInterval(() => {
        setDisplayedText(prev => prev + fullText[charIndex]);
        charIndex++;
        if (charIndex === fullText.length) {
          clearInterval(timer); // Stop typing when the full text is displayed
        }
      }, 50); // Adjust typing speed here
    }
    return () => clearInterval(timer); // Clear interval on unmount or when hover changes
  }, [hoverIndex]);

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
                  onMouseEnter={() => setHoverIndex(i)} // Set the hover index on mouse enter
                  onMouseLeave={() => setHoverIndex(null)} // Reset the hover index on mouse leave
                >
                  <div className="feature-content">
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{hoverIndex === i ? displayedText : ''}</p> {/* Show the typing effect */}
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
