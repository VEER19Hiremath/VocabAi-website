import React, { useState, useEffect } from "react";
import "../styles/header.css";
import TypingEffect from './TypinfEffect'; // Import the TypingEffect

export const Header = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '../img/main_image_1.jpg',
    '../img/main_image_2.jpeg',
    '../img/intro-bg-2.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="header-about-container">
      {/* Header Section */}
      <div className="header-section">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
        <div className="overlay">
          <div className="intro-text">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="about-section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>About Us</h2>
            <div className="about-only-text">
              <TypingEffect text={props.data ? props.data.paragraph1 : "loading..."} />
            </div>
          </div>
          <div className="about-image-container">
            <img src="../img/about.jpg" className="img-responsive" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};
