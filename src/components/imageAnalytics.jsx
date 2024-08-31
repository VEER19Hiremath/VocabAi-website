import React, { useEffect, useRef } from "react";
import "../styles/imageAnalytics.css";

export const ImageAnalytics = ({ data }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (data && data.description) {
      const textElement = textRef.current;
      const textContent = data.description.split(". ");
      let i = 0;
      let j = 0;

      textElement.textContent = "";

      const typingEffect = () => {
        if (i < textContent.length) {
          if (j < textContent[i].length) {
            textElement.textContent += textContent[i].charAt(j);
            j++;
            setTimeout(typingEffect, 50); // Speed of typing
          } else {
            textElement.textContent += ".\n"; // Add a new line after each sentence
            i++;
            j = 0;
            setTimeout(typingEffect, 500); // Delay before typing the next line
          }
        }
      };

      typingEffect();
    }
  }, [data]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-analytics-container">
      <h2 className="text-analytics-title">Image Analytics Demo</h2>
      <div className="video-and-text">
        <video className="image-analytics-video" width="30%" controls>
          <source src={data.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-analytics-description-container">
          <p ref={textRef} className="text-analytics-description">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
