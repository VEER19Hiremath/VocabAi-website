import { Image } from "./image";
import React from "react";
import '../styles/gallery.css'; // Import the CSS file for the gallery

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>This section contains images of Vocab</p>
        </div>
        <div className="gallery-container">
          <div className="gallery-inner">
            {props.data
              ? props.data.concat(props.data).map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="gallery-slide"
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
