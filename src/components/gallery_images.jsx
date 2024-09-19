import { Image } from "./image";
import React, { useState, useEffect, useRef } from "react";
import '../styles/gallery.css'; // Import the CSS file for the gallery

export const Gallery = (props) => {
  const galleryInnerRef = useRef(null);

  const handleMouseEnter = () => {
    if (galleryInnerRef.current) {
      galleryInnerRef.current.style.animationPlayState = "paused"; // Pause animation on hover
    }
  };

  const handleMouseLeave = () => {
    if (galleryInnerRef.current) {
      galleryInnerRef.current.style.animationPlayState = "running"; // Resume animation on mouse leave
    }
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title gallery-section-title">
          <h2>Gallery</h2>
          <p>This section contains images of Vocab</p>
        </div>
        <div className="gallery-container">
          <div
            className="gallery-inner"
            ref={galleryInnerRef}
          >
            {props.data
              ? props.data.concat(props.data).map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="gallery-slide"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
